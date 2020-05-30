import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnezComponent } from './fitnez.component';

describe('FitnezComponent', () => {
  let component: FitnezComponent;
  let fixture: ComponentFixture<FitnezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
