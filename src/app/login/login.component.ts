import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveBatchItemToLocalStorage } from '../utils/ls';
import { AuthService } from '../shared/service/auth/auth.service';

@Component({
  selector: 'luv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public auth: AuthService,
  ) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(e) {
    const { account, password } = this.loginForm.value;
    this.auth.login(account, password);
    this.router.navigate(['/board']);
  }
  ngOnInit() {
  }

}
