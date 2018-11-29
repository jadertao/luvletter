import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank/blank.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BlankComponent
  ],
  providers: [
  ],
  exports: [
    BlankComponent
  ],
})
export class ComponentModule { }
