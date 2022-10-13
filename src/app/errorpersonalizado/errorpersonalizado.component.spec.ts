import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpersonalizadoComponent } from './errorpersonalizado.component';

describe('ErrorpersonalizadoComponent', () => {
  let component: ErrorpersonalizadoComponent;
  let fixture: ComponentFixture<ErrorpersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorpersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorpersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
