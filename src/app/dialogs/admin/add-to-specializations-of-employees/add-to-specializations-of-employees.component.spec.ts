import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToSpecializationsOfEmployeesComponent } from './add-to-specializations-of-employees.component';

describe('AddToSpecializationsOfEmployeesComponent', () => {
  let component: AddToSpecializationsOfEmployeesComponent;
  let fixture: ComponentFixture<AddToSpecializationsOfEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToSpecializationsOfEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToSpecializationsOfEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
