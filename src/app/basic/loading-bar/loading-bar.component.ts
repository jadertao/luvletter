import { Component, OnInit, AfterViewInit, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { LoadingBarService, SlimLoadingBarEvent, SlimLoadingBarEventType } from './loading-bar.service';

@Component({
  selector: 'luv-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit, AfterViewInit {

  @Input() show = true;

  constructor(public s: LoadingBarService, private _elmRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.s.events.subscribe((event: SlimLoadingBarEvent) => {
      if (event.type === SlimLoadingBarEventType.VISIBLE) {
        this.show = event.value;
      }
    });
  }

  ngAfterViewInit(): void {
    this.s.events.subscribe((event: SlimLoadingBarEvent) => {
      // tslint:disable-next-line:max-line-length
      this._elmRef.nativeElement.querySelector('.loading-body').visible = event.type === SlimLoadingBarEventType.VISIBLE ? event.value : true;
      this._changeDetectorRef.detectChanges();
    });
  }
}
