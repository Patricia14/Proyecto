import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from "../../services/usuario.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  opcionSeleccionado: string;
  unidades;

  constructor(private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  usuarioModel = new Usuario("", "", "", "", "")

  ngOnInit() {
    this.unidades = ["Administrador", "Veterinario", "Cliente"];
    this.opcionSeleccionado = "Selecciona";
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

}
