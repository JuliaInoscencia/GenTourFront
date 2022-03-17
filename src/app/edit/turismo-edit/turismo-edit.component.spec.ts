import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoEditComponent } from './turismo-edit.component';

describe('TurismoEditComponent', () => {
  let component: TurismoEditComponent;
  let fixture: ComponentFixture<TurismoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
