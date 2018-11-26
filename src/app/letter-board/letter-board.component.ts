import { Component, OnInit } from '@angular/core';
import { Luvletter, PartialLetter } from '../utils/interface';
import { LetterService } from '../shared/service/letter.service';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getValueOfUserInfo } from '../utils/ls';
import { format } from 'date-fns';

@Component({
  selector: 'luv-letter-board',
  templateUrl: './letter-board.component.html',
  styleUrls: ['./letter-board.component.scss']
})
export class LetterBoardComponent implements OnInit {


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
  public moods = ['moodA', 'moodB', 'moodC', 'moodD', 'moodE'];
  public tags = ['tagA', 'tagB', 'tagC', 'tagD', 'tagE'];

  public defaultLetter: Luvletter[] = [{
    id: 0,
    account: 'loading',
    nickname: 'loading',
    createTime: '0000-00-00 00:00:00',
    content: 'loading',
    mood: 'loading',
    tags: ['loading'],
  }];
  constructor(
    private router: Router,
    private letter: LetterService
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
    this.isVisible = !Boolean(this.isVisible);
  }

  handleOk = (msg: PartialLetter, cb?: () => void): void => {
    const { content, tags, mood } = msg;
    this.isOkLoading = true;

    const getUserInfo = getValueOfUserInfo(this.router);
    const account = getUserInfo('account');
    const nickname = getUserInfo('nickname');
    const createTime = format(new Date().toLocaleDateString(), 'YYYY-MM-DD hh:mm:ss');
    const letter: Luvletter = { account, nickname, createTime, content, tags, mood };
    setTimeout(() => {
      this.post(letter, cb);
    }, 2000);
  }

  handleCancel(): void {
    this.isOkLoading = false;
    this.isVisible = false;
  }

  post = (letter: Luvletter, cb?: () => void) => {
    this.letter.post(letter).pipe(
      switchMap(() => this.letter.getOnePage(1))
    ).subscribe(v => {
      this.letters = v;
      this.isVisible = false;
      this.isOkLoading = false;
      if (typeof cb === 'function') {
        cb();
      }
      this.state = 'init';
      setTimeout(() => { this.state = 'done'; }, 0);
    }, () => { console.log(222); this.isOkLoading = false; console.log(this.isOkLoading); });
  }

  ngOnInit() {
    this.letter
      .getPagesLength().pipe(
        tap(({ number, size }) => {
          this.max = number;
          this.size = size;
          console.log(number, size);
        }),
        switchMap(({ size }) => this.letter.getOnePage(1, size))
      )
      .subscribe(v => {
        this.letters = v;
        this.loading = false;
      });
  }

}
