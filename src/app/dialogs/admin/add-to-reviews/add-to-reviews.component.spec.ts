import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToReviewsComponent } from './add-to-reviews.component';

describe('AddToReviewsComponent', () => {
  let component: AddToReviewsComponent;
  let fixture: ComponentFixture<AddToReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
