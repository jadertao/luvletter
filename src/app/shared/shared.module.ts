
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { AuthGuardService } from './service/auth/auth-guard.service';
import { AuthService } from './service/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
  ],
  providers: [
    AuthGuardService,
    AuthService,
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule { }
