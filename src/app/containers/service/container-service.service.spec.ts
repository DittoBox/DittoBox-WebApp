import { TestBed } from '@angular/core/testing';

import { ContainerServiceService } from './container-service.service';

describe('ContainerServiceService', () => {
  let service: ContainerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
