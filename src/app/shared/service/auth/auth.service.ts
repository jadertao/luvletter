import { from as observableFrom, Observable } from 'rxjs';
import { map, mapTo, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { saveBatchItemToLocalStorage, getItemFromLocalStorage, clearLocalStorage } from '../../../utils/ls';
import { HttpClient } from '@angular/common/http';
import { LOGIN } from '../../../url';
import { checkLogin } from '../../../utils/checkLogin';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class AuthService {

  user = { account: null };
  items: Observable<any[]>;

  public checkLogin = checkLogin;

  constructor(
    private http: HttpClient,
    private messager: NzMessageService,
  ) {
    const account = getItemFromLocalStorage('account');
    if (account) {
      this.user.account = account;
    }
  }


  login(account: string, password: string): Observable<boolean> {
    const body = { account, password };
    return this.http.post<any>(LOGIN, body).pipe(
      tap(v => {
        saveBatchItemToLocalStorage(v);
        this.user = { account };
      }),
      mapTo(true),
    );
  }

  logout() {
    clearLocalStorage();
  }
}
