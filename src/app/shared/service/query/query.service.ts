import { Injectable } from '@angular/core';

@Injectable()
export class QueryService {

  private posts: Array<any>;

  constructor() {
  }

  getUserEmail(): string {
    return localStorage.getItem('user');
  }

  getUserNickname(): any {

  }
}
