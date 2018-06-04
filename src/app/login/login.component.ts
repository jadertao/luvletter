import { AuthService } from '../service/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { validateCallback } from '@firebase/util';

@Component({
  selector: 'luv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  private email = '';
  private password = '';

  constructor(private auth: AuthService, private router: Router) { }

  resolveInput(e: HTMLInputElement) {
    console.log(e.value);
    const value = e.value;
    switch (e.value) {
      case 'login':
        e.value = 'logging in...';
        console.log(this.email, this.password);
        if (this.email && this.password) {
          this.auth
            .login(this.email, this.password)
            .subscribe(
              () => {
                setTimeout(() => this.router.navigate(['/']), 0);
              },
              (error) => {
                this.reset();
                e.value = `${error.code} ${error.message}`;
              });
        } else {
          e.value = 'incompleted message';
          this.reset();
          setTimeout(() => {
            e.value = '';
          }, 3000);
        }
        break;
      case 'clear':
        this.reset();
        localStorage.removeItem('user');
        e.value = '';
        break;
      default:
        if (!this.email) {
          this.email = value;
          e.value = '';
        } else if (this.email && !this.password) {
          this.password = value;
          e.value = '';
        } else {
          console.log(this.email, this.password);
        }
        break;
    }
  }

  reset() {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

}
