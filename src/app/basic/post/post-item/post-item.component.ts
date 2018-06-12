import { Component, OnInit, Input } from '@angular/core';
import { Luvletter } from '../../../utils/interface';

@Component({
  selector: 'luv-postitem',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Luvletter;
  constructor() { }

  ngOnInit() {
  }

}
