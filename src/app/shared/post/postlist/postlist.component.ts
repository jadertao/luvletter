import { Component, OnInit, Input } from '@angular/core';
import { Luvletter } from '../../../utils/interface';

@Component({
  selector: 'luv-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  @Input() posts: Array<Luvletter>;
  constructor() { }

  ngOnInit() {
  }

}
