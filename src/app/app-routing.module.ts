import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/service/auth/auth-guard.service';
import { LetterBoardComponent } from './letter-board/letter-board.component';
import { LetterListComponent } from './letter-board/letter-list/letter-list.component';
import { PassportComponent } from './passport/passport.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: 'board',
    component: LetterBoardComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full',
    children: [{
      path: '',
      component: LetterListComponent,
      pathMatch: 'full',
    }]
  },
  {
    path: 'passport',
    component: PassportComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
