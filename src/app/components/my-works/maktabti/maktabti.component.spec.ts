import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaktabtiComponent } from './maktabti.component';

describe('MaktabtiComponent', () => {
  let component: MaktabtiComponent;
  let fixture: ComponentFixture<MaktabtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaktabtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaktabtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
