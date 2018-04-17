import { Component, OnInit, Input } from '@angular/core';
import { Luvletter } from '../../../utils/interface';

@Component({
  selector: 'luv-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.scss']
})
export class PostitemComponent implements OnInit {
  @Input() post: Luvletter;
  constructor() { }

  ngOnInit() {
  }

}
