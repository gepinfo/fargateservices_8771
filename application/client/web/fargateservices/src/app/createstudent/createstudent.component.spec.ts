import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestudentComponent } from './createstudent.component';

describe('CreatestudentComponent', () => {
  let component: CreatestudentComponent;
  let fixture: ComponentFixture<CreatestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});