import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformsComponent } from './allforms.component';

describe('AllformsComponent', () => {
  let component: AllformsComponent;
  let fixture: ComponentFixture<AllformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
