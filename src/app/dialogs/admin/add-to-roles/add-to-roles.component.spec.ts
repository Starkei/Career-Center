import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToRolesComponent } from './add-to-roles.component';

describe('AddToRolesComponent', () => {
  let component: AddToRolesComponent;
  let fixture: ComponentFixture<AddToRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
