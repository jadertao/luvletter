import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { tap, delay } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  items: Observable<any[]>;
  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {

  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): Observable<any> {
    console.log('login 111111');
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .switchMap(() => this.db
        .collection('users', ref => ref.where('email', '==', email))
        .valueChanges())
      .do(v => localStorage.setItem('user', JSON.stringify(v[0])));
  }

  logout(): void {
    this.afAuth
      .auth
      .signOut()
      .then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        // An error happened.
      });
  }
}
