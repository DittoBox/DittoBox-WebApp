import { TestBed } from '@angular/core/testing';

import { FacilityServiceService } from './facility-service.service';

describe('FacilityServiceService', () => {
  let service: FacilityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
