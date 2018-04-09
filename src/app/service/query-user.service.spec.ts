/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QueryUserService } from './query-user.service';

describe('Service: QueryUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryUserService]
    });
  });

  it('should ...', inject([QueryUserService], (service: QueryUserService) => {
    expect(service).toBeTruthy();
  }));
});
