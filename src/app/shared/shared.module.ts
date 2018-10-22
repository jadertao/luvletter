
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from './service/auth/auth-guard.service';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  providers: [
    AuthGuardService,
    AuthService,
  ],
  exports: [
  ]
})
export class SharedModule { }
