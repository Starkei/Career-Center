import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaionsComponent } from './consultaions.component';

describe('ConsultaionsComponent', () => {
  let component: ConsultaionsComponent;
  let fixture: ComponentFixture<ConsultaionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
