import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../expediente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Expediente } from '../expediente';

@Component({
  selector: 'app-agregar-expediente',
  templateUrl: './agregar-expediente.component.html',
  styleUrls: ['./agregar-expediente.component.css']
})
export class AgregarExpedienteComponent implements OnInit {

  opcionSeleccionadoExpe;
  unidadesExpe;

  constructor(private expedienteService: ExpedienteService,
    private snackBar: MatSnackBar,
    private router: Router,) { }

  ngOnInit() {
    this.unidadesExpe = [1, 2, 3,4];
    this.opcionSeleccionadoExpe = "Selecciona";
  }

  expedientesModel = new Expediente(0,"","",0,"")

  onSubmit() {
    this.expedientesModel.id_cita = this.opcionSeleccionadoExpe;
    this.expedienteService.addExpediente(this.expedientesModel).subscribe(() => {
      this.snackBar.open('Expediente Registrato', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/expediente/mostrar']);
    })
  }

}
