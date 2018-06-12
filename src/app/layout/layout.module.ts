import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportComponent } from './passport/passport.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    PassportComponent,
    BoardComponent
]
})
export class LayoutModule { }
