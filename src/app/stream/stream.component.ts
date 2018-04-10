import { Component, OnInit } from '@angular/core';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'luv-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  private posts: Array<any>;
  constructor(public qs: QueryService) {
    this.posts = qs.getPostList();
  }

  ngOnInit() {
  }

}
