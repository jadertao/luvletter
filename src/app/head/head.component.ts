import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getItemFromLocalStorage, removeItemFromLocalStorage, removeBatchItemFromLocalStorage } from '../utils/ls';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth/auth.service';

@Component({
  selector: 'luv-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit, OnChanges {

  @Input() show: boolean;
  constructor(
    private router: Router,
    public auth: AuthService,
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    console.log(this.auth.user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
  }
}
