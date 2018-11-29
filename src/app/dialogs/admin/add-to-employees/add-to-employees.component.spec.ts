import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToEmployeesComponent } from './add-to-employees.component';

describe('AddToEmployeesComponent', () => {
  let component: AddToEmployeesComponent;
  let fixture: ComponentFixture<AddToEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
