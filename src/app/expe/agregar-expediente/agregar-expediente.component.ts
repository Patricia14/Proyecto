import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../expediente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Expediente } from '../expediente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-agregar-expediente',
  templateUrl: './agregar-expediente.component.html',
  styleUrls: ['./agregar-expediente.component.css']
})
export class AgregarExpedienteComponent implements OnInit {

  opcionSeleccionadoExpe;
  unidadesExpe;
  seleccion;
  forms: FormGroup;

  public expedientes: Expediente[] = [
    new Expediente(0, "dfdfdf")
  ];

  constructor(private expedienteService: ExpedienteService,
    private snackBar: MatSnackBar,
    private router: Router,) {}

 ngOnInit() {
    this.cmbCita();
    console.log(this.expedientesModel.id_cita);
    console.log(this.expedientesModel.descripcion_cita);
    this.opcionSeleccionadoExpe = "Selecciona";
  }

  expedientesModel = new Expediente(0, "")

  onSubmit() {
    console.log(this.expedientesModel)
    console.log(this.expedienteService)
    this.expedientesModel.id_cita = this.seleccion;
    this.expedienteService.addExpediente(this.expedientesModel).subscribe(() => {
      this.snackBar.open('Expediente Registrato', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/expediente']);
    })
  }

  cmbCita() {
    return this.expedienteService
      .obternetCita()
      .subscribe(expediente => {
        this.unidadesExpe = expediente;
      });
  }

  prueba(e) {
    this.seleccion = e.target.value;
  }

}
