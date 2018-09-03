import { Component, OnInit, Input } from '@angular/core';
import { Luvletter } from '../../../utils/interface';

@Component({
  selector: 'luv-postlist',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: Array<Luvletter>;
  constructor() { }

  ngOnInit() {
  }

}
