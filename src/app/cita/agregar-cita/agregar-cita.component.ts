import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cita } from '../cita';
import { first } from 'rxjs/operators';
import { on } from 'process';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})

export class AgregarCitaComponent implements OnInit {
  opcionSeleccionadoCita;
  unidadesCita;
  seleccion;
  forms: FormGroup;

  public cita: Cita[] = [
    new Cita("", 0)
  ];
  constructor(private citaService: CitaService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    this.cmbMascota();
    this.opcionSeleccionadoCita = "Selecciona";
  }
  citaModel = new Cita("",0 )


  onSubmit() {
    this.citaModel.id_cliente = this.seleccion;
    this.citaService.addCita(this.citaModel).pipe(first()).subscribe(() => {
      this.snackBar.open('Cita guardada', undefined, {
        duration: 3000,
      },);
      this.router.navigate(['/cita']);
    },
    error => {
      alert("Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.")
      this.snackBar.open('Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.', undefined, {
        duration: 3000,
      })
    })
  }


  cmbMascota() {
    return this.citaService
      .obternerCita()
      .subscribe(Cita => {
        this.unidadesCita = Cita;
      });
  }

  prueba(e) {
    this.seleccion = e.target.value;
  }
  volver(){
    console.log(this.citaModel)
    console.log(this.citaService)
  }

}
