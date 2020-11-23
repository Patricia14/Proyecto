import { Component, OnInit } from '@angular/core';
import { ExpedienteService } from '../expediente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Expediente } from '../expediente';
import { of } from 'rxjs';
import { Catalogo } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service"
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

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
  angForm: FormGroup;
  loginbtn: boolean;
  logoutbtn: boolean;
  tipo: string;
  loggedIn: boolean;
  public expedientes: Expediente[] = [
    new Expediente(0, "dfdfdf")
  ];

  constructor(private expedienteService: ExpedienteService,
    private snackBar: MatSnackBar,
    private router: Router,
    private catalogoService: CatalogoService,
    private fb: FormBuilder,
    private dataService: CatalogoService,
    private usuarioService: CatalogoService,
 ) {this.angForm = this.fb.group({
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
} }

 ngOnInit() {
    this.cmbCita();
    console.log(this.expedientesModel.id_cita);
    console.log(this.expedientesModel.descripcion_cita);
    this.opcionSeleccionadoExpe = "Selecciona";
  }

  expedientesModel = new Expediente(0, "")
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
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
  get descripcion() { return this.angForm.get('descripcion') }
}
