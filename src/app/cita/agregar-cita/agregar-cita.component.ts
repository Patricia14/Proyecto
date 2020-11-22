import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cita } from '../cita';
import { first } from 'rxjs/operators';
import { on } from 'process';
import { RegistroService } from '../../services/registro.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})

export class AgregarCitaComponent implements OnInit {
  opcionSeleccionadoCita;
  unidadesCita;
  unidadesCita2;
  seleccion;
  forms: FormGroup;
  public cita: Cita[] = [
    new Cita("", 0)
  ];
  constructor(private citaService: CitaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dataService: RegistroService,
    private permissionsService: NgxPermissionsService,
    private rolesService: NgxRolesService
  ) {
  }

  ngOnInit() {
    this.cmbMascota();
    this.cmbMascota2();
    this.permissionsService.loadPermissions([this.dataService.getToken()]);
    //this.permissionsService.loadPermissions([this.dataService.getTokenIdUser()]);
  }
  citaModel = new Cita("", 0)


  onSubmit() {
    console.log(this.dataService.getToken())
    this.citaModel.id_cliente = this.seleccion;
    if(this.citaModel.id_cliente != null){
      this.citaService.addCita(this.citaModel).pipe(first()).subscribe(() => {
        this.snackBar.open('Cita guardada', undefined, {
          duration: 3000,
        });
        this.router.navigate(['/cita']);
      },
        error => {
          alert("Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.")
          this.snackBar.open('Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.', undefined, {
            duration: 3000,
          })
        })
    }else{
      this.citaModel.id_cliente = 0;
      this.citaService.addCita(this.citaModel).pipe(first()).subscribe(() => {
        this.snackBar.open('Cita guardada', undefined, {
          duration: 3000,
        });
        this.router.navigate(['/cita']);
      },
        error => {
          alert("Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.")
          this.snackBar.open('Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.', undefined, {
            duration: 3000,
          })
        })
    }

  }

  cmbMascota() {
    return this.citaService
      .llenarCmb(this.dataService.getTokenIdUser())
      .subscribe(Cita => {
        this.unidadesCita = Cita;
      });
  }

  cmbMascota2() {
    return this.citaService
      .llenarCmb2()
      .subscribe(Cita => {
        this.unidadesCita2 = Cita;
      });
  }

  prueba(e) {
    this.seleccion = e.target.value;
  }
  volver() {
    console.log(this.citaModel)
    console.log(this.citaService)
  }

}
