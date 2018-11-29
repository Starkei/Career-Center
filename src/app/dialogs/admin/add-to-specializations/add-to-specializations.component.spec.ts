import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToSpecializationsComponent } from './add-to-specializations.component';

describe('AddToSpecializationsComponent', () => {
  let component: AddToSpecializationsComponent;
  let fixture: ComponentFixture<AddToSpecializationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToSpecializationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
