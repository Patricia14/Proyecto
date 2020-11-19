import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cita } from '../cita';

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
    this.citaService.addCita(this.citaModel).subscribe(() => {
      this.snackBar.open('Cita guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/cita/mostrar']);
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
