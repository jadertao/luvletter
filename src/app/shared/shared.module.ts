
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { AuthGuardService } from './service/auth/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
  ],
  providers: [
    AuthGuardService,
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule { }
