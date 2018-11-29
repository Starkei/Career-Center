import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToUsersComponent } from './add-to-users.component';

describe('AddToUsersComponent', () => {
  let component: AddToUsersComponent;
  let fixture: ComponentFixture<AddToUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
