import { from as observableFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { saveBatchItemToLocalStorage } from '../../../utils/ls';


@Injectable()
export class AuthService {

  items: Observable<any[]>;
  constructor(
  ) {

  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): any {
    saveBatchItemToLocalStorage({ email, password });
  }

  logout(): void {

  }
}
