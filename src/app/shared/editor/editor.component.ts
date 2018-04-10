import { Component, OnInit, SimpleChanges } from '@angular/core';
import { QueryService } from './../../service/query.service';

@Component({
  selector: 'luv-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public DEFAULT = 'something to share?';

  private avator = 'aqua';
  private _content = '';
  private mood = '开心';

  private isEditing = false;
  private hasChanged = false;

  constructor(public qs: QueryService) {

  }

  get content(): string {
    if (!this.hasChanged) {
      return this.DEFAULT;
    } else {
      return this._content;
    }
  }

  set content(v: string) {
    this._content = v;
  }

  get greeting(): string {
    return `${this.mood} 的 ${localStorage.getItem('user')}`;
  }
  onSend(e) {
    this.qs
      .getUserNickname()
      .subscribe(v => console.log(v));
  }

  onEditorFocus(e: HTMLDivElement) {
    this.isEditing = true;
    if (!this.hasChanged && e.textContent === this.DEFAULT) {
      e.textContent = '';
    }
  }

  onEditorBlur(e: HTMLDivElement) {
    this.isEditing = false;
    if (e.textContent.length !== 0) {
      this.hasChanged = true;
    } else {
      this.hasChanged = false;
      e.textContent = this.DEFAULT;
    }
    this.content = e.textContent;
  }

  parseInput(e: HTMLDivElement) {
    const rawCMD = e.textContent;
    if (e.textContent.startsWith('set')) {
      const cmd = rawCMD.split(' ');
      this[cmd[1]] = cmd[2];
      e.textContent = '';
      return true;
    }
  }

  ngOnInit() {
  }

}
