
import { TestBed } from '@angular/core/testing';

import { CatalogoService } from './catalogo.service';

describe('CatalogosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogoService = TestBed.get(CatalogoService);
    expect(service).toBeTruthy();
  });
});
