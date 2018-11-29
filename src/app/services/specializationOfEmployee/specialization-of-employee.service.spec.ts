import { TestBed } from '@angular/core/testing';

import { SpecializationOfEmployeeService } from './specialization-of-employee.service';

describe('SpecializationOfEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecializationOfEmployeeService = TestBed.get(SpecializationOfEmployeeService);
    expect(service).toBeTruthy();
  });
});
