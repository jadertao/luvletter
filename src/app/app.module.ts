import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StreamComponent } from './stream/stream.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    LoginComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
