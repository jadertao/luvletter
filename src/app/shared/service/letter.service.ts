import { Injectable } from '@angular/core';
import { Luvletter } from '../../utils/interface';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LetterService {


  content = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    + ' A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  letters: Luvletter[] = [{
    id: 1,
    account: 'foo',
    nickname: 'bar',
    createTime: 1536114907125,
    content: this.content,
    mood: 'happy',
    tag: ['默认'],
  }, {
    id: 2,
    account: 'foo',
    nickname: 'bar',
    createTime: 1536114907125,
    content: this.content,
    mood: 'happy',
    tag: ['默认'],
  }, {
    id: 3,
    account: 'foo',
    nickname: 'bar',
    createTime: 1536114907125,
    content: this.content,
    mood: 'happy',
    tag: ['默认'],
  }, {
    id: 4,
    account: 'foo',
    nickname: 'bar',
    createTime: 1536114907125,
    content: this.content,
    mood: 'happy',
    tag: ['默认'],
  }];
  modal: boolean;

  constructor(
    private auth: AuthService
  ) {
    this.modal = false;
  }

  getLetters(): Luvletter[] {
    return this.letters;
  }
  post(rawLetter: any) {
    const timestamp = new Date().getTime();
    const id = this.letters.length + 1;
    const nickname = this.letters[0].nickname;
    const account = this.auth.user.account;
    const letter = Object.assign({}, rawLetter, { timestamp, id, nickname, account });
    this.letters.unshift(letter);
  }
}
