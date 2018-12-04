import { from as observableFrom, Observable, of } from 'rxjs';
import { map, mapTo, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { saveBatchItemToLocalStorage, getItemFromLocalStorage, clearLocalStorage } from '../../../utils/ls';
import { handleError } from '../../../utils/handleError';
import { LOGIN } from '../../../http/url';
import { checkLogin } from '../../../utils/checkLogin';

@Injectable()
export class AuthService {

  user: any;
  items: Observable<any[]>;

  public checkLogin = checkLogin;

  constructor(
    private http: HttpClient,
    private messager: NzMessageService,
  ) {
    const userInfo = getItemFromLocalStorage('userInfo');
    if (userInfo) {
      this.user = userInfo;
    }
  }


  login(account: string, password: string): Observable<boolean> {
    const body = { account, password };
    const loginMsg = this.messager.info('登录中', { nzDuration: 10000 });
    return this.http.post<HttpResponse<any> | any>(LOGIN, body).pipe(
      catchError(handleError(this.messager, { closeOthers: true })),
      tap(v => {
        if (!v.error) {
          this.messager.remove(loginMsg.messageId);
          this.messager.success('登陆成功', { nzDuration: 1000 });
          saveBatchItemToLocalStorage({ userInfo: v });
          this.user = v;
        }
      }),
      mapTo(true),
    );
  }

  logout() {
    clearLocalStorage();
  }
}
