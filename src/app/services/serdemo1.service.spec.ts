import { TestBed } from '@angular/core/testing';

import { Serdemo1Service } from './serdemo1.service';

describe('Serdemo1Service', () => {
  let service: Serdemo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serdemo1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
