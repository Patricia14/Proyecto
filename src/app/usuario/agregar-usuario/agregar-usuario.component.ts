import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from "../../services/usuario.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  opcionSeleccionado: string;
  unidades;
  angForm: FormGroup;
  loginbtn: boolean;
  logoutbtn: boolean;
  tipo: string;

  prueba: string;
  loggedIn: boolean;
  constructor(private fb: FormBuilder,
    private dataService: UsuarioService,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {  this.angForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['', Validators.required],
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])],
      apellido: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])]
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
  }}

  usuarioModel = new Usuario("", "", "", "", "")

  ngOnInit() {
    this.unidades = ["Administrador", "Veterinario", "Cliente"];
    this.opcionSeleccionado = "Selecciona";
  }
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  onSubmit() {
    console.log(this.opcionSeleccionado);
    if (this.opcionSeleccionado == "Administrador") {
      this.usuarioModel.tipo_usuario = "0";
      console.log(this.usuarioModel.tipo_usuario);
      this.usuarioService.addUsuario(this.usuarioModel).subscribe(() => {
        this.snackBar.open('Usuario guardado', undefined, {
          duration: 1500,
        });
        this.router.navigate(['/usuarios']);
      })
    } else if (this.opcionSeleccionado == "Veterinario") {
      this.usuarioModel.tipo_usuario = "1";
      console.log(this.usuarioModel.tipo_usuario);
      this.usuarioService.addUsuario(this.usuarioModel).subscribe(() => {
        this.snackBar.open('Usuario guardado', undefined, {
          duration: 1500,
        });
        this.router.navigate(['/usuarios']);
      })
    } else {
      this.usuarioModel.tipo_usuario = "2";
      console.log(this.usuarioModel.tipo_usuario);
      this.usuarioService.addUsuario(this.usuarioModel).subscribe(() => {
        this.snackBar.open('Usuario guardado', undefined, {
          duration: 1500,
        });
        this.router.navigate(['/usuarios']);
      })
    }
  }
  get nombre() { return this.angForm.get('nombre'); }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get apellido() { return this.angForm.get('apellido') }

}
