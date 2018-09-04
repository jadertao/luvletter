import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth/auth.service';

@Component({
  selector: 'luv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'luv';

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('luvletter') === null) {
      localStorage.setItem('luvletter', JSON.stringify({}));
    }
  }
}
