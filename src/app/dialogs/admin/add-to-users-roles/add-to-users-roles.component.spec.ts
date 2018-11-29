import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToUsersRolesComponent } from './add-to-users-roles.component';

describe('AddToUsersRolesComponent', () => {
  let component: AddToUsersRolesComponent;
  let fixture: ComponentFixture<AddToUsersRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToUsersRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToUsersRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
