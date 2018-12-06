import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfFiveComponent } from './best-of-five.component';

describe('BestOfFiveComponent', () => {
  let component: BestOfFiveComponent;
  let fixture: ComponentFixture<BestOfFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestOfFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOfFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
