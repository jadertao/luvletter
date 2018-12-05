import { Component, OnInit } from '@angular/core';
import { Luvletter, PartialLetter } from '../utils/interface';
import { LetterService } from '../shared/service/letter.service';
import { tap, concatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getValueOfUserInfo } from '../utils/ls';
import { format } from 'date-fns';
import { TagService } from '../shared/service/tag.service';
import { MoodService } from '../shared/service/mood.service';

@Component({
  selector: 'luv-letter-board',
  templateUrl: './letter-board.component.html',
  styleUrls: ['./letter-board.component.scss']
})
export class LetterBoardComponent implements OnInit {

  public error: string;

  // list
  public position = 1;
  public size = 10;
  public max = 10;
  public letters: Luvletter[];
  public state: 'init' | 'done';
  public loading = true;

  // post
  public isOkLoading = false;
  public isVisible = false;
  public moods = [];
  public tags = [];

  public defaultLetter: Luvletter[] = [{
    id: 0,
    account: 'default',
    nickname: 'loading',
    createTime: '0000-00-00 00:00:00',
    content: 'loading',
    mood: 'loading',
    tags: ['loading'],
  }];
  constructor(
    private router: Router,
    private letter: LetterService,
    private tagService: TagService,
    private moodService: MoodService,
  ) { }

  onPageChange = (e: number) => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    this.loading = true;
    this.letter.getOnePage(e, this.size).subscribe(v => {
      this.letters = v;
      this.loading = false;
    });
  }

  toggleVisible = () => {
    this.error = '';
    this.isVisible = !Boolean(this.isVisible);
  }

  checkPostable(v: PartialLetter): boolean {
    const { mood, tags, content } = v;
    if (!mood) {
      this.error = 'mood 不能为空';
      return false;
    }
    if (tags.length === 0) {
      this.error = 'tags 不能为空';
      return false;
    }
    if (content.trim().length === 0) {
      this.error = '内容不能为空';
      return false;
    }
    return true;
  }

  handleOk = (msg: PartialLetter, cb?: () => void): void => {

    if (this.checkPostable(msg)) {
      this.error = '';
      const { content, tags, mood } = msg;

      this.isOkLoading = true;

      const getUserInfo = getValueOfUserInfo(this.router);
      const account = getUserInfo('account');
      const nickname = getUserInfo('nickname');
      const createTime = format(new Date().toLocaleDateString(), 'YYYY-MM-DD hh:mm:ss');
      const letter: Luvletter = { account, nickname, createTime, content, tags, mood };
      this.post(letter, cb);
    }
  }

  handleCancel(): void {
    this.isOkLoading = false;
    this.isVisible = false;
  }

  post = (letter: Luvletter, cb?: () => void) => {
    this.letter.post(letter).pipe(
      concatMap(() => this.letter.getOnePage(1))
    ).subscribe(v => {
      this.letters = v;
      this.isVisible = false;
      this.isOkLoading = false;
      if (typeof cb === 'function') {
        cb();
      }
      this.state = 'init';
      setTimeout(() => { this.state = 'done'; }, 0);
    }, () => { this.isOkLoading = false; });
  }

  onShowModal = () => {
    if (this.isVisible === false) {
      this.tagService.getAll().subscribe(v => this.tags = v);
      this.moodService.getAll().subscribe(v => this.moods = v);
    }
  }

  ngOnInit() {
    this.letter
      .getPagesLength().pipe(
        tap(({ number, size }) => {
          this.max = number;
          this.size = size;
        }),
        concatMap(({ size }) => this.letter.getOnePage(1, size))
      )
      .subscribe(v => {
        this.letters = v;
        this.loading = false;
      });
  }

}
