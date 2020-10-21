import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from "../../services/usuario.service"
import { Usuario } from '../../models/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario("", "", "", "");
  unidades = [];

  constructor(private route: ActivatedRoute,
    private router: Router, private usuariosService: UsuarioService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.unidades = ["Administrador", "Veterinario", "Cliente"];
      let idMascota = this.route.snapshot.paramMap.get("id_usuario");
      this.usuariosService.getUsuario(idMascota).subscribe((usuario: Usuario) => this.usuario = usuario)
    }

    volver() {
      this.router.navigate(['/usuarios']);
    }

    onSubmit() {
      this.usuario.tipo_usuario = this.unidades.indexOf(this.usuario.nombre_tipo_usuario);
      console.log(this.usuario)
      this.usuariosService.updateUsuario(this.usuario).subscribe(() => {
        this.snackBar.open('Usuario actualizado', undefined, {
          duration: 1500,
        });
        this.volver();
      });
    }

}
