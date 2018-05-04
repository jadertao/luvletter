import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'luv-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  @ViewChild('scroll')
  scroll: ElementRef;

  public show = false;
  public timer: any;

  constructor(public el: ElementRef) {

  }

  onClick() {
    this.timer = setInterval(() => {
      const osTop = document.documentElement.scrollTop || document.body.scrollTop;
      let speed = Math.floor(osTop / 6);
      if (speed < 10) { speed = 10; }
      document.documentElement.scrollTop = document.body.scrollTop = osTop - speed;

      if (document.documentElement.scrollTop < 20 && document.body.scrollTop < 20) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        clearInterval(this.timer);
      }
    }, 30);
  }

  ngOnInit() {
    window.onscroll = () => {
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop > clientHeight) {
        this.show = true;
      } else {
        this.show = false;
      }
    };
  }

}
