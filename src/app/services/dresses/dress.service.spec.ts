import { TestBed } from '@angular/core/testing';

import { DressService } from './dress.service';

describe('DressService', () => {
  let service: DressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
