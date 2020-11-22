import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotasService } from "../../services/mascotas.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';



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
  constructor(private mascotasService: MascotasService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cmbUsuario();
    this.opcionSeleccionadoCliente = "Selecciona";
  }
  mascotaModel = new Mascota("", undefined, "", undefined )

  onSubmit() {
    this.mascotaModel.id_usuario = this.seleccion;
    this.mascotasService.addMascota(this.mascotaModel).subscribe(() => {
      this.snackBar.open('Mascota guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/mascotas']);
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
}
