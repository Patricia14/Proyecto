import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotasService } from "../../services/mascotas.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from "../../services/usuario.service"

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  opcionSeleccionadoCliente;
  unidadesUsuario;
  seleccion;
  forms: FormGroup;
  angForm: FormGroup;
  loginbtn: boolean;
  logoutbtn: boolean;
  tipo: string;
  loggedIn: boolean;
  constructor(private mascotasService: MascotasService,
    private fb: FormBuilder,
    private dataService: MascotasService,
    private usuarioService: MascotasService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.angForm = this.fb.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])],
        edad: ['', Validators.required],
        raza: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])],
        
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
    this.cmbUsuario();
    this.opcionSeleccionadoCliente = "Selecciona";
  }
  mascotaModel = new Mascota("", undefined, "", undefined )
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  onSubmit() {
    this.mascotaModel.id_usuario = this.seleccion;
    this.mascotasService.addMascota(this.mascotaModel).subscribe(() => {
      this.snackBar.open('Mascota guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/mascotas']);
    },
    error => {
      //alert("Seleccione un Dueño")
      this.snackBar.open('Seleccione un Dueño', undefined, {
        duration: 3000,
      })
    })
  }

  cmbUsuario() {
    return this.mascotasService
      .obternerUsuario()
      .subscribe(Mascota => {
        this.unidadesUsuario = Mascota;
      });
  }
  prueba(e) {
    this.seleccion = e.target.value;
  }
  get nombre() { return this.angForm.get('nombre'); }
  get edad() { return this.angForm.get('edad'); }
  get raza() { return this.angForm.get('raza'); }
 
}