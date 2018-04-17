import { Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { QueryService } from './../../service/query.service';
import { Luvletter } from '../../utils/interface';

@Component({
  selector: 'luv-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {


  @Output() handleLetter = new EventEmitter<Luvletter>();

  public DEFAULT = 'something to share?';

  private _avatar: string = this.getUserProperty('avatar');
  private _nickname: string = this.getUserProperty('nickname');
  private _content = '';
  private mood = '开心';
  private _topic = ['默认'];

  private isEditing = false;
  private hasContentChanged = false;
  private hasUserInfoChanged = false;

  constructor(public qs: QueryService) {

  }

  get topic() {
    return this._topic;
  }

  set topic(v) {
    this._topic = v;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(nickname) {
    this.hasUserInfoChanged = true;
    this._nickname = nickname;
  }

  get content(): string {
    if (!this.hasContentChanged) {
      return this.DEFAULT;
    } else {
      return this._content;
    }
  }

  set content(v: string) {
    this._content = v;
  }

  set avatar(v: string) {
    this._avatar = v;
  }

  get avatar(): string {
    return this._avatar;
  }


  getUserProperty(property: string): any {
    const user = localStorage.getItem('user');
    return JSON.parse(user)[property];
  }

  setUserProperty(property: string, value: string | number) {
    this.hasUserInfoChanged = true;
    const user = localStorage.getItem('user');
    user[property] = value;
    localStorage.setItem('item', JSON.stringify(user));
  }

  onSend(e) {
    const letter: Luvletter = {
      avatar: this._avatar,
      content: this.content,
      mood: this.mood,
      nickname: this.nickname,
      topic: this.topic,
      user: this.getUserProperty('email'),
      timestamp: new Date().getTime(),
    };
    this.handleLetter.emit(letter);
    // this.qs.setS(letter);
    // this.qs
    //   .getUserNickname()
    //   .subscribe(v => console.log(v));
  }

  onEditorFocus(e: HTMLDivElement) {
    this.isEditing = true;
    if (!this.hasContentChanged && e.innerText === this.DEFAULT) {
      e.innerText = '';
    }
  }

  onEditorBlur(e: HTMLDivElement) {
    this.isEditing = false;
    if (e.innerText.length !== 0) {
      this.hasContentChanged = true;
    } else {
      this.hasContentChanged = false;
      e.innerText = this.DEFAULT;
    }
    this.content = e.innerText;
    console.log(e.innerText);
  }

  parseInput(e: HTMLDivElement) {
    const rawCMD = e.innerText;
    if (e.innerText.startsWith('set')) {
      const cmd = rawCMD.split(' ');
      this[cmd[1]] = cmd[2];
      e.innerText = '';
      return true;
    }
  }

  ngOnInit() {
  }

}
