import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterBoardComponent } from './letter-board.component';
import { LetterCardComponent } from './letter-card/letter-card.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { LetterPostComponent } from './letter-post/letter-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule
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
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class LetterBoardModule { }
