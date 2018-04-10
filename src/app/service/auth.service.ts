import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/observable';
import { tap, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {

  items: Observable<any[]>;
  constructor(public afAuth: AngularFireAuth) {

  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): Promise<any> {
    console.log('login 111111');
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => localStorage.setItem('user', email));
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
