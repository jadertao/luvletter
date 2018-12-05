import { Component, OnInit } from '@angular/core';
import { AVATAR } from '../http/url';
import { getValueOfUserInfo } from '../utils/ls';
import { Router } from '@angular/router';
import { AccountInfo } from '../utils/interface';

@Component({
  selector: 'luv-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {


  public accountInfo: Partial<AccountInfo>;
  constructor(private router: Router) { }

  public makeUpAvatar = AVATAR;
  public getUserInfo = getValueOfUserInfo(this.router);
  public cacheUserAccountInfo(): Partial<AccountInfo> {
    if (this.accountInfo) {
      return this.accountInfo;
    }
    this.accountInfo = getValueOfUserInfo(this.router)();
    return this.accountInfo;
  }

  ngOnInit() {
  }

}
