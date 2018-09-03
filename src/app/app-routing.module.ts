import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/service/auth/auth-guard.service';
import { LetterBoardComponent } from './letter-board/letter-board.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'board',
    component: LetterBoardComponent,
    canActivate: [AuthGuardService],
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
