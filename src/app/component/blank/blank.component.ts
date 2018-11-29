import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'luv-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  @Input()
  width: number;
  constructor() { }

  ngOnInit() {
  }

}
