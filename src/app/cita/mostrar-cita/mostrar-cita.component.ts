import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { Cita } from '../cita';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../Utilidades/dialogo-confimacion/dialogo-confirmacion.component" ;
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mostrar-cita',
  templateUrl: './mostrar-cita.component.html',
  styleUrls: ['./mostrar-cita.component.css']
})
export class MostrarCitaComponent implements OnInit {

  public citas: Cita[] = [
    new Cita("",0)
  ];

  constructor(private citaService: CitaService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarCita(cita: Cita) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar la cita numero ${cita.id_cita}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.citaService
          .deleteCita(cita)
          .subscribe((confirmar: Boolean) => {
            if(confirmar != false){
              this.obtenerCita();
              this.snackBar.open('Cita eliminada', undefined, {
                duration: 3000,
              });
            }else{
              this.snackBar.open('Existe un expediente con este ID', undefined, {
                duration: 3000,
              });
            }
          });
      })
  }

  ngOnInit() {
    this.obtenerCita();
  }

  obtenerCita() {
    return this.citaService
      .getCitas()
      .subscribe((cita: Cita[]) => this.citas = cita);


}

}
