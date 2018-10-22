import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'luv-letter-card',
  templateUrl: './letter-card.component.html',
  styleUrls: ['./letter-card.component.scss']
})
export class LetterCardComponent implements OnInit {

  @Input() avator: string;
  @Input() nickname: string;
  @Input() content: string;
  @Input() mood: string;
  @Input() tags: string[];
  constructor() {
  }

  ngOnInit() {
  }

}
