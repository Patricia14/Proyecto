import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../expediente.service';
import { Expediente } from '../expediente';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../Utilidades/dialogo-confimacion/dialogo-confirmacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mostrar-expediente',
  templateUrl: './mostrar-expediente.component.html',
  styleUrls: ['./mostrar-expediente.component.css']
})
export class MostrarExpedienteComponent implements OnInit {

  public expedientes: Expediente[] = [
    new Expediente(0, "Muestra")
  ];

  constructor(private expedienteService: ExpedienteService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarExpediente(expediente: Expediente) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${expediente.descripcion_expediente}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.expedienteService
          .deleteExpediente(expediente)
          .subscribe(() => {
            this.obtenerExpediente();
            this.snackBar.open('Expediente eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerExpediente();
  }

  obtenerExpediente() {
    return this.expedienteService
      .getExpedientes()
      .subscribe((expediente: Expediente[]) => this.expedientes = expediente);
  }
}
