import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterBoardComponent } from './letter-board.component';
import { LetterCardComponent } from './letter-card/letter-card.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetterPostComponent } from './letter-post/letter-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
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
