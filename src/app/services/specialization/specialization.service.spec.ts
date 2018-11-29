import { TestBed } from '@angular/core/testing';

import { SpecializationService } from './specialization.service';

describe('SpecializationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecializationService = TestBed.get(SpecializationService);
    expect(service).toBeTruthy();
  });
});
