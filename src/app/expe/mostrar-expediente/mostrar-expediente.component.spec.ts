import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarExpedienteComponent } from './mostrar-expediente.component';

describe('MostrarExpedienteComponent', () => {
  let component: MostrarExpedienteComponent;
  let fixture: ComponentFixture<MostrarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
