import { Component, OnInit } from '@angular/core';
import { CatalogoService } from "../services/catalogo.service";
import {Catalogo} from "../models/catalogo";
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../Utilidades/dialogo-confimacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-catalogo',
  templateUrl: './listar-catalogo.component.html',
  styleUrls: ['./listar-catalogo.component.css']
})
export class ListarCatalogoComponent implements OnInit {
  public catalogo: Catalogo[] = [
    new Catalogo("comedero para gatos", 5.00,"imagen","Comedero para gatos de color rojo")
  ];

  constructor(private catalogoService: CatalogoService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarCatalogo(catalogo: Catalogo) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${catalogo.nombre_catalogo}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.catalogoService
          .deleteCatalogo(catalogo)
          .subscribe(() => {
            this.obtenerCatalogo();
            this.snackBar.open('Catalogo eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerCatalogo();
  }

  obtenerCatalogo() {
    return this.catalogoService
      .getCatalogos()
      .subscribe((catalogo: Catalogo[]) => this.catalogo = catalogo);
  }

}
