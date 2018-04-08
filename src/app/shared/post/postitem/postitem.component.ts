import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'luv-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.scss']
})
export class PostitemComponent implements OnInit {
  @Input() post: Object;
  constructor() { }

  ngOnInit() {
  }

}
