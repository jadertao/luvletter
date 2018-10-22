import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { getItemFromLocalStorage } from '../../../utils/ls';



@Injectable()
export class AuthGuardService {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    const isLogin = this.checkLogin();
    if (url === '/login') {
      if (isLogin) {
        this.router.navigate(['/board']);
        return false;
      }
      return true;
    }
    return isLogin;
  }

  checkLogin(): boolean {
    if (getItemFromLocalStorage('account')) { return true; }
    return false;
  }
}
