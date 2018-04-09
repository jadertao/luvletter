import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/observable';
import { tap, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {

  items: Observable<any[]>;
  constructor(db: AngularFirestore, public afAuth: AngularFireAuth) {
    // this.items = db.collection('users').valueChanges();
    // this.items.subscribe(v => console.log(v));
  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  login(email: string, password: string): Promise<any> {
    console.log('login 111111');
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => localStorage.setItem('user', email) )
      .then(() => this.isLoggedIn = true);
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
