import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterBoardComponent } from './letter-board.component';
import { LetterCardComponent } from './letter-card/letter-card.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { LetterPostComponent } from './letter-post/letter-post.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LetterBoardComponent,
    LetterCardComponent,
    LetterListComponent,
    LetterPostComponent,
  ],
  entryComponents: [
    LetterPostComponent
  ],
  exports: [
    LetterBoardComponent,
    LetterCardComponent,
    LetterListComponent,
    LetterPostComponent,
  ]
})
export class LetterBoardModule { }
