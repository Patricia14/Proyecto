import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cita } from '../cita';
import { first } from 'rxjs/operators';
import { RegistroService } from '../../services/registro.service';
import { on } from 'process';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { of } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})

export class AgregarCitaComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  opcionSeleccionadoCita;
  unidadesCita;
  unidadesCita2;
  seleccion;
  forms: FormGroup;
  angForm: FormGroup;
  loginbtn: boolean;
  logoutbtn: boolean;
  tipo: string;
  loggedIn: boolean;
  public cita: Cita[] = [
    new Cita("", 0)
  ];
  constructor(private citaService: CitaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dataService: RegistroService,
    private permissionsService: NgxPermissionsService,
    private rolesService: NgxRolesService,
    private fb: FormBuilder,

  
  ) {
    const currentDay = new Date().getFullYear();

    this.minDate = new Date(currentDay - 0, 10, 22);
    this.maxDate = new Date(currentDay + 1, 11, 31);
    this.angForm = this.fb.group({
      descripcion: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])],
     
   });
   
   dataService.getLoggedInName.subscribe(nombre => this.changeName(nombre));
   if (this.dataService.isLoggedIn()) {
     console.log("loggedin");
     this.loginbtn = false;
     this.logoutbtn = true
   }
   else {
     this.loginbtn = true;
     this.logoutbtn = false
   } 
  }

  ngOnInit() {
    console.log(this.minDate)
    this.cmbMascota();
    this.cmbMascota2();
    this.permissionsService.loadPermissions([this.dataService.getToken()]);
  }
  citaModel = new Cita("", 0)
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  onSubmit() {
    console.log(this.dataService.getToken())
    this.citaModel.id_cliente = this.seleccion;
    if (this.citaModel.id_cliente != null) {
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
    } else {
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
  get descripcion() { return this.angForm.get('descripcion') }

}
