import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToConsultationsComponent } from './add-to-consultations.component';

describe('AddToConsultationsComponent', () => {
  let component: AddToConsultationsComponent;
  let fixture: ComponentFixture<AddToConsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToConsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
