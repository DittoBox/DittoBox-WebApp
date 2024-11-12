import { TestBed } from '@angular/core/testing';

import { PrivilegeGuardService } from './privilege-guard.service';

describe('PrivilegeGuardService', () => {
  let service: PrivilegeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
