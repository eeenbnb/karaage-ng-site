import { TestBed } from '@angular/core/testing';

import { HttpTopService } from './http-top.service';

describe('HttpTopService', () => {
  let service: HttpTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
