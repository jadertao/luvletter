import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'luv-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  @Input() posts: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}
