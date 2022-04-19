import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcollegeComponent } from './getallcollege.component';

describe('GetallcollegeComponent', () => {
  let component: GetallcollegeComponent;
  let fixture: ComponentFixture<GetallcollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallcollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});