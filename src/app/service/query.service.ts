import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { tap, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Luvletter } from '../utils/interface';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/do';
@Injectable()
export class QueryService {

  private posts: Array<any>;

  constructor(public db: AngularFirestore) {
  }

  getUserEmail(): string {
    return localStorage.getItem('user');
  }

  getUserNickname(): any {
    return this.db
      .collection('users', (ref) => ref.where('email', '==', this.getUserEmail()))
      .valueChanges();
  }

  getP() {
    return this.db
      .collection('rooms/7/letters')
      .ref
      .orderBy('timestamp', 'desc')
      .get()
      .then(v => v.docs)
      .then(v => [...v.map(i => i.data())])
      .then(v => this.posts = v);
  }

  setS(letter) {
    this.db
      .collection('rooms/7/letters')
      .add(letter)
      .then(ref => console.log(ref.id))
      .then(() => this.getP());
  }
}
