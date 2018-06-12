import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export enum SlimLoadingBarEventType {
  VISIBLE
}

export class SlimLoadingBarEvent {
  constructor(public type: SlimLoadingBarEventType, public value: any) { }
}

@Injectable()
export class LoadingBarService {

  public _visible = false;

  private eventSource: Subject<SlimLoadingBarEvent> = new Subject<SlimLoadingBarEvent>();
  public events: Observable<SlimLoadingBarEvent> = this.eventSource.asObservable();


  set visible(value: boolean) {
    this._visible = value;
    this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
    console.log(value);
  }

  get visible(): boolean {
    return this._visible;
  }

  constructor() { }

  private emitEvent(event: SlimLoadingBarEvent) {
    if (this.eventSource) {
      // Push up a new event
      this.eventSource.next(event);
    }
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
    console.log('hide');
  }
}
