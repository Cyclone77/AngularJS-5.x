import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangtestComponent } from './changtest.component';

describe('ChangtestComponent', () => {
  let component: ChangtestComponent;
  let fixture: ComponentFixture<ChangtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
