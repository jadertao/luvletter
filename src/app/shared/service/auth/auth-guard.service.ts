import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { getItemFromLocalStorage } from '../../../utils/ls';
import { checkLogin } from '../../../utils/checkLogin';



@Injectable()
export class AuthGuardService {


  public checkLogin = checkLogin;

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    const isLogin = checkLogin();
    if (isLogin) {
      if (url === '/login') {
        this.router.navigate(['/board']);
        return false;
      }
      return true;
    } else {
      if (url !== '/login') {
        this.router.navigate(['/login']);
        return false;
      }
      if (url === '/login') {
        return true;
      }
      return false;
    }
  }


}
