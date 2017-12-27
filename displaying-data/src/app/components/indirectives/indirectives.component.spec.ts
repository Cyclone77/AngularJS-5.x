import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectivesComponent } from './indirectives.component';

describe('IndirectivesComponent', () => {
  let component: IndirectivesComponent;
  let fixture: ComponentFixture<IndirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
