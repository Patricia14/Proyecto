import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from "../../services/mascotas.service"
import { Mascota } from '../../models/mascota';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { RegistroService } from '../../services/registro.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  public mascota: Mascota = new Mascota("", 0, "", 0);
  opcionSeleccionadoUsuario;
  unidadesUsuario;
  seleccion;
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private mascotasService: MascotasService,
    private dataService: MascotasService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cmbUsuario();
    let idMascota = this.route.snapshot.paramMap.get("id_mascota");
    this.mascotasService.getMascota(idMascota).subscribe((mascota: Mascota) => this.mascota = mascota)
  }

  volver() {
    this.router.navigate(['/mascotas']);
  }
  mascotaModel = new Mascota("", undefined, "", undefined )
  onSubmit() {
    this.mascotaModel.id_usuario = this.seleccion;
    this.mascotasService.updateMascota(this.mascota).subscribe(() => {
      this.snackBar.open('Mascota actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
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

}
