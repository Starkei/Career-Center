import { TestBed } from '@angular/core/testing';

import { UserRoleService } from './user-role.service';

describe('UserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRoleService = TestBed.get(UserRoleService);
    expect(service).toBeTruthy();
  });
});
