import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjpipesComponent } from './ejpipes.component';

describe('EjpipesComponent', () => {
  let component: EjpipesComponent;
  let fixture: ComponentFixture<EjpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
