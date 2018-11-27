import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollToTopComponent,
  ],
  providers: [
  ],
  exports: [
    ScrollToTopComponent,
  ],
})
export class BasicModule { }
