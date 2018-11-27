import { Injectable } from '@angular/core';
import { Luvletter } from '../../utils/interface';
import { AuthService } from './auth/auth.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LENGTH_OF_PAGES, ALL_LETTERS } from '../../http/url';
import { catchError } from 'rxjs/operators';
import { handleError } from '../../utils/handleError';
import { NzMessageService } from 'ng-zorro-antd';
import { page2Offset } from '../../utils/pageOffset';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  pageSize = 10;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private messager: NzMessageService,
  ) {
  }

  post(letter: Luvletter) {
    return this.http.post<any>(ALL_LETTERS, letter).pipe(
      catchError(handleError(this.messager, { closeOthers: true })),
    );
  }

  getPagesLength() {
    return this.http.get<any>(LENGTH_OF_PAGES).pipe(
      catchError(handleError(this.messager))
    );
    // this.http.get<any>(ALL_LETTERS).subscribe(v => console.log(v));
  }
  getOnePage(pageIndex: number, pageSize: number = this.pageSize) {
    return this.http.get<any>(ALL_LETTERS, { params: page2Offset(pageIndex, pageSize) }).pipe(
      catchError(handleError(this.messager))
    );
  }

}
