import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveBatchItemToLocalStorage } from '../utils/ls';

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
  ) {
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
    const { account, password } = this.loginForm.value;
    saveBatchItemToLocalStorage({ account, password });
    this.router.navigate(['/board']);
  }
  ngOnInit() {
  }

}
