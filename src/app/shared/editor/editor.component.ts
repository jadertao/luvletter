import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'luv-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public DEFAULT = 'something to share?';
  private _content = '';
  private isEditing = false;
  private hasChanged = false;

  constructor() { }

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

  onSend(e) {
    console.log(this.content);
  }

  onEditorFocus(element) {
    this.isEditing = true;
    if (!this.hasChanged && element.textContent === this.DEFAULT) {
      element.textContent = '';
    }
  }

  onEditorBlur(element) {
    this.isEditing = false;
    if (element.textContent.length !== 0) {
      this.hasChanged = true;
    } else {
      this.hasChanged = false;
      element.textContent = this.DEFAULT;
    }
    this.content = element.textContent;
  }

  ngOnInit() {
  }

}
