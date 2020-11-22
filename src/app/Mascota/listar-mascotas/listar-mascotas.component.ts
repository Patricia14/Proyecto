
import { Component, OnInit } from '@angular/core';
import { MascotasService } from "../../services/mascotas.service"
import { Mascota } from "../../models/mascota"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../Utilidades/dialogo-confimacion/dialogo-confirmacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {
  public mascotas: Mascota[] = [
    new Mascota("Maggie", 20,"Chihuahua", 20)
  ];

  constructor(private mascotasService: MascotasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarMascota(mascota: Mascota) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${mascota.nombre_mascota}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.mascotasService
          .deleteMascota(mascota)
          .subscribe(() => {
            this.obtenerMascotas();
            this.snackBar.open('Mascota eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.mascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) => this.mascotas = mascotas);
  }

}
