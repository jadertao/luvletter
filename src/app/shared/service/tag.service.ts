import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { TAGS } from '../../http/url';
import { catchError } from 'rxjs/operators';
import { handleError } from '../../utils/handleError';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private http: HttpClient,
    private messager: NzMessageService,
  ) { }

  public getAll() {
    return this.http.get<any>(TAGS).pipe(
      catchError(handleError(this.messager))
    );
  }

}
