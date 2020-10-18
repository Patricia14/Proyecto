import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotasService } from "../../services/mascotas.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  constructor(private mascotasService: MascotasService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  mascotaModel = new Mascota("", undefined, "" )

  onSubmit() {
    this.mascotasService.addMascota(this.mascotaModel).subscribe(() => {
      this.snackBar.open('Mascota guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/mascotas']);
    })
  }

}
