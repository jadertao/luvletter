import { Component, OnInit } from '@angular/core';
import { QueryService } from '../service/query/query.service';
import { LoadingBarService } from '../shared/loading-bar/loading-bar.service';
import { Luvletter } from '../utils/interface';

@Component({
  selector: 'luv-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  private posts: Array<any>;
  constructor(public qs: QueryService, public loading: LoadingBarService) {
    qs
      .getP()
      .then((v) => {
        this.posts = v;
        this.loading.hide();
        console.log(this.loading.visible);
      });
  }

  handleLetter(e: Luvletter) {
    console.log(e);
    this.qs.setS(e);
  }
  ngOnInit() {
  }

}
