import { TestBed } from '@angular/core/testing';

import { HotelsListService } from './hotels-list.service';

describe('HotelsListService', () => {
  let service: HotelsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
