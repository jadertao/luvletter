import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { LetterService } from '../../shared/service/letter.service';
import { Luvletter } from '../../utils/interface';

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
export class LetterListComponent implements OnInit {

  public letters: Luvletter[];
  public state: string;
  constructor(
    private letter: LetterService,
  ) {
    this.letters = this.letter.getLetters();
    letter.state.subscribe(v => this.state = v);
  }

  ngOnInit() {
  }

}
