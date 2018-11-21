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
    this.letter.getPagesLength();
  }

  ngOnDestroy() {
    this.subscriptionA.unsubscribe();
    this.subscriptionB.unsubscribe();
  }
}
