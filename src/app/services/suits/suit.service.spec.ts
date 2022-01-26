import { TestBed } from '@angular/core/testing';

import { SuitService } from './suit.service';

describe('SuitService', () => {
  let service: SuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
