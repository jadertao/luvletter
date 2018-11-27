
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { formatError } from '../../utils/error';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private messager: NzMessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof ProgressEvent) {
          if (event.type === 'error') {
            console.log('progress error');
          }
        }
        if (event instanceof HttpResponse) {
          console.log(event.status);
          if (/^[4,5]/g.test(String(event.status))) {
            console.log('error:', event.status);
          }
        }
        return event;
      })
    );
  }

}
