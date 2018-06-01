import { from as observableFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap, switchMap } from 'rxjs/operators';



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
    return observableFrom(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap(() => this.db
          .collection('users', ref => ref.where('email', '==', email))
          .valueChanges()),
        tap(v => localStorage.setItem('user', JSON.stringify(v[0])))
      );
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
