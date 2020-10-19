import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExpedienteComponent } from './agregar-expediente.component';

describe('AgregarExpedienteComponent', () => {
  let component: AgregarExpedienteComponent;
  let fixture: ComponentFixture<AgregarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
