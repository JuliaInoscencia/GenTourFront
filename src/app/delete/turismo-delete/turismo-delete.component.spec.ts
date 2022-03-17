import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoDeleteComponent } from './turismo-delete.component';

describe('TurismoDeleteComponent', () => {
  let component: TurismoDeleteComponent;
  let fixture: ComponentFixture<TurismoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
