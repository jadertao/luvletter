import { Injectable } from '@angular/core';
import { Luvletter } from '../../utils/interface';
import { AuthService } from './auth/auth.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LetterService {


  content = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    + ' A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  letters: Luvletter[];
  lettersSubject: Subject<Luvletter[]>;
  modal: boolean;
  state: Subject<string>;
  constructor(
    private auth: AuthService
  ) {
    this.modal = false;
    this.state = new Subject<string>();

    this.lettersSubject = new Subject<Luvletter[]>();
    this.letters = [{
      id: 1,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 2,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 3,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 4,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 5,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 6,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 7,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }, {
      id: 8,
      account: 'foo',
      nickname: 'bar',
      createTime: 1536114907125,
      content: this.content,
      mood: 'happy',
      tags: ['默认'],
    }];

    // this.state.next('done');
    // this.lettersSubject.next(this.letters);
  }

  getState() {
    return this.state.asObservable();
  }

  broadCastState(state: string) {
    this.state.next(state);
  }

  broadCastLetters(letters: Luvletter[]) {
    this.lettersSubject.next(letters);
  }

  getLetters() {
    return this.lettersSubject.asObservable();
  }

  post(rawLetter: any) {
    const timestamp = new Date().getTime();
    const id = this.letters.length + 1;
    const nickname = this.letters[0].nickname;
    const account = this.auth.user.account;
    const letter = Object.assign({}, rawLetter, { timestamp, id, nickname, account });

    this.letters = [letter, ...this.letters];

    this.broadCastLetters(this.letters);
    this.toggleState('init');
    this.click();
  }

  click() {
    window.setTimeout(() => this.broadCastState('done'), 300);
  }

  toggleState(s: string) {
    this.broadCastState(s);
  }
}
