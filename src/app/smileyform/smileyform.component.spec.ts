import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyformComponent } from './smileyform.component';

describe('SmileyformComponent', () => {
  let component: SmileyformComponent;
  let fixture: ComponentFixture<SmileyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
