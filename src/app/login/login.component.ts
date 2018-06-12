import { AuthService } from '../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'luv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.loginForm);
  }

  login(e) {
    console.log(this.loginForm.value);
    const { account, password } = this.loginForm.value;
    this.auth
      .login(account, password)
      .subscribe(
        () => {
          setTimeout(() => this.router.navigate(['/']), 0);
        }
      );
  }
  // resolveInput(e: HTMLInputElement) {
  //   console.log(e.value);
  //   const value = e.value;
  //   switch (e.value) {
  //     case 'login':
  //       e.value = 'logging in...';
  //       console.log(this.email, this.password);
  //       if (this.email && this.password) {
  //         this.auth
  //           .login(this.email, this.password)
  //           .subscribe(
  //             () => {
  //               setTimeout(() => this.router.navigate(['/']), 0);
  //             },
  //             (error) => {
  //               this.reset();
  //               e.value = `${error.code} ${error.message}`;
  //             });
  //       } else {
  //         e.value = 'incompleted message';
  //         this.reset();
  //         setTimeout(() => {
  //           e.value = '';
  //         }, 3000);
  //       }
  //       break;
  //     case 'clear':
  //       this.reset();
  //       localStorage.removeItem('user');
  //       e.value = '';
  //       break;
  //     default:
  //       if (!this.email) {
  //         this.email = value;
  //         e.value = '';
  //       } else if (this.email && !this.password) {
  //         this.password = value;
  //         e.value = '';
  //       } else {
  //         console.log(this.email, this.password);
  //       }
  //       break;
  //   }
  // }

  ngOnInit() {
  }

}
