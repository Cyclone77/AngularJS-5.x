import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesyntaxComponent } from './modulesyntax.component';

describe('ModulesyntaxComponent', () => {
  let component: ModulesyntaxComponent;
  let fixture: ComponentFixture<ModulesyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
