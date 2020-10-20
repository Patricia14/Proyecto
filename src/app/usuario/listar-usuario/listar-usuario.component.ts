import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service"
import { Usuario } from "../../models/usuario"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../Utilidades/dialogo-confimacion/dialogo-confirmacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  public usuarios: Usuario[] = [
    new Usuario("Maggie", "Alex", "Chihuahua", "Admin")
  ];

  constructor(private usuariosServices: UsuarioService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarUsuario(usuario: Usuario) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${usuario.nombre_usuario}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.usuariosServices
          .deleteUsuario(usuario)
          .subscribe(() => {
            this.obtenerUsuario();
            this.snackBar.open('Usuario eliminado', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerUsuario();
    console.log(this.obtenerUsuario())
  }

  obtenerUsuario() {
    return this.usuariosServices
      .getUsuarios()
      .subscribe((usuarios: Usuario[]) => this.usuarios = usuarios);
  }

}
