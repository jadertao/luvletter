import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { LetterService } from '../../shared/service/letter.service';
import { Luvletter } from '../../utils/interface';
import { Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'luv-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss'],
  animations: [
    trigger('newLetter', [
      state('init', style({
        height: 0
        // transform: 'scale(0.01)'
      })),
      state('done', style({
        // transform: 'scale(1.10)'
        height: '*'
      })),
      transition('init => done', animate('500ms cubic-bezier(0.68, -0.55, 0.27, 1.55)')),
    ])
  ]
})
export class LetterListComponent implements OnInit, OnDestroy {

  @Input()
  public size = 10;
  @Input()
  public max = 10;
  @Input()
  public letters: Luvletter[];
  @Input()
  public state: 'init' | 'done';
  @Input()
  public loading = true;

  @Input()
  public onPageChange: (e: number) => {};

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
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
