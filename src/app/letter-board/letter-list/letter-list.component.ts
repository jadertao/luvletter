import { Component, OnInit, OnDestroy } from '@angular/core';
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

  public position = 1;
  public size = 10;
  public max = 10;
  public letters: Luvletter[];
  public state: string;
  public subscriptionA: Subscription;
  public subscriptionB: Subscription;

  constructor(
    private letter: LetterService,
  ) {
    this.subscriptionA = letter.getLetters().subscribe(v => {
      console.log(v);
      this.letters = v;
    });
    this.subscriptionB = letter.getState().subscribe(v => {
      console.log(v);
      this.state = v;
    });
    letter.broadCastLetters(letter.letters);
    letter.broadCastState('done');
  }

  ngOnInit() {
    console.log('get');
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
        // console.log(v);
        this.letters = v;
      });
  }

  ngOnDestroy() {
    this.subscriptionA.unsubscribe();
    this.subscriptionB.unsubscribe();
  }
}
