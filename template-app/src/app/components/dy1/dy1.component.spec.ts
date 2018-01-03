import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dy1Component } from './dy1.component';

describe('Dy1Component', () => {
  let component: Dy1Component;
  let fixture: ComponentFixture<Dy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
