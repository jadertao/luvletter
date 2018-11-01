import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LetterBoardModule } from './letter-board/letter-board.module';
import { PassportComponent } from './passport/passport.component';
import { HeadComponent } from './head/head.component';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HeadComponent,
      PassportComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      LetterBoardModule,
      FormsModule,
      HttpClientModule,
      NgZorroAntdModule
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
