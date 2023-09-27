import { TestBed } from '@angular/core/testing';

import { FollworsService } from './follwors.service';

describe('FollworsService', () => {
  let service: FollworsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollworsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
