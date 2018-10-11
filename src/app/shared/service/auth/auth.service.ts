import { from as observableFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { saveBatchItemToLocalStorage, getItemFromLocalStorage, removeBatchItemFromLocalStorage } from '../../../utils/ls';


@Injectable()
export class AuthService {

  user = { account: null };
  items: Observable<any[]>;
  constructor(
  ) {
    const account = getItemFromLocalStorage('account');
    if (account) {
      this.isLogin = true;
      this.user.account = account;
    }
    console.log(account);
  }

  isLogin = false;

  login(account: string, password: string): any {
    saveBatchItemToLocalStorage({ account, password });
    this.isLogin = true;
    this.user = { account };
  }

  logout() {
    if (getItemFromLocalStorage('account')) {
      removeBatchItemFromLocalStorage(['account', 'password']);
      this.isLogin = false;
    }
  }
  checkLogin(): boolean {
    if (getItemFromLocalStorage('account')) { return true; }

    return false;
  }
}
