import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeleteComponent } from './tipo-delete.component';

describe('TipoDeleteComponent', () => {
  let component: TipoDeleteComponent;
  let fixture: ComponentFixture<TipoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
