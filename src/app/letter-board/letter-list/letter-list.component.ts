import { Component, OnInit } from '@angular/core';
import { LetterService } from '../../shared/service/letter.service';
import { Luvletter } from '../../utils/interface';

@Component({
  selector: 'luv-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss']
})
export class LetterListComponent implements OnInit {

  public letters: Luvletter[];
  constructor(
    private letter: LetterService
  ) {
    this.letters = this.letter.getLetters();
  }

  ngOnInit() {
  }

}
