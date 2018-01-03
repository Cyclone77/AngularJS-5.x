import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dy2Component } from './dy2.component';

describe('Dy2Component', () => {
  let component: Dy2Component;
  let fixture: ComponentFixture<Dy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
