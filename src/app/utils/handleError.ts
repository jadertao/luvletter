import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { formatError } from './error';

interface HandlerOptions {
  closeOthers: boolean; // remove all
}

export const handleError = (
  messager: NzMessageService,
  handerOptions: HandlerOptions = { closeOthers: false }
) => (error: HttpErrorResponse) => {
  if (handerOptions.closeOthers) {
    messager.remove();
  }
  messager.warning(formatError(error.error));
  return throwError(error.error);
};
