
import { TestBed } from '@angular/core/testing';

import { ExpedienteService } from './expediente.service';

describe('MascotasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpedienteService = TestBed.get(ExpedienteService);
    expect(service).toBeTruthy();
  });
});
