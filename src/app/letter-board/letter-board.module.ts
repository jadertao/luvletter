import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterBoardComponent } from './letter-board.component';
import { LetterCardComponent } from './letter-card/letter-card.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    LetterBoardComponent,
    LetterCardComponent,
    LetterListComponent,
  ],
  exports: [
    LetterBoardComponent,
    LetterCardComponent,
    LetterListComponent,
  ]
})
export class LetterBoardModule { }
