import { TestBed } from '@angular/core/testing';

import { ProductmanagementserService } from './productmanagementser.service';

describe('ProductmanagementserService', () => {
  let service: ProductmanagementserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductmanagementserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
