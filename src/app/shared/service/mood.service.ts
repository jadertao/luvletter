import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { MOODS } from '../../http/url';
import { catchError } from 'rxjs/operators';
import { handleError } from '../../utils/handleError';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(
    private http: HttpClient,
    private messager: NzMessageService,
  ) { }

  public getAll() {
    return this.http.get<any>(MOODS).pipe(
      catchError(handleError(this.messager))
    );
  }
}
