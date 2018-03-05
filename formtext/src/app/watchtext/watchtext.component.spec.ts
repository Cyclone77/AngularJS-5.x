import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchtextComponent } from './watchtext.component';

describe('WatchtextComponent', () => {
  let component: WatchtextComponent;
  let fixture: ComponentFixture<WatchtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
