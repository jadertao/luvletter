import { from as observableFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { saveBatchItemToLocalStorage, getItemFromLocalStorage, removeBatchItemFromLocalStorage } from '../../../utils/ls';


@Injectable()
export class AuthService {

  items: Observable<any[]>;
  constructor(
  ) {
    if (getItemFromLocalStorage('account')) {
      this.isLogin = true;
    }
  }

  isLogin = false;

  login(account: string, password: string): any {
    saveBatchItemToLocalStorage({ account, password });
    this.isLogin = true;
    console.log(this.isLogin);
  }

  logout() {
    if (getItemFromLocalStorage('account')) {
      removeBatchItemFromLocalStorage(['account', 'password']);
      this.isLogin = false;
    }
  }
}
