import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { Router, ActivatedRoute } from '@angular/router';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';
import { RegistroService } from '../../services/registro.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {
  public cita: Cita = new Cita("", 0);
  //unidadesCita = [];
  opcionSeleccionadoCita;
  unidadesCita;
  seleccion;
  minDate:Date;
  maxDate:Date;

  constructor(private route: ActivatedRoute,
    private router: Router, private citaService: CitaService,
    private snackBar: MatSnackBar,
    private dataService: RegistroService,
    private permissionsService: NgxPermissionsService, 
    private rolesService: NgxRolesService) {
      const currentDay = new Date().getFullYear();

    this.minDate = new Date(currentDay - 0, 10, 22);
    this.maxDate = new Date(currentDay + 1, 11, 31);
     }

  ngOnInit() {
    this.cmbMascota();
    this.permissionsService.loadPermissions([this.dataService.getToken()]);
    
    let idCita = this.route.snapshot.paramMap.get("id_cita");
    this.citaService.getCita(idCita).subscribe((cita: Cita) => this.cita = cita)
    console.log(idCita)
  }
  volver() {
  this.router.navigate(['/cita']);
   console.log(this.cita);
  }
citaModel = new Cita("",0)
  onSubmit() {
    this.citaModel.id_cita = this.seleccion;
    this.citaService.updateCita(this.cita).pipe(first()).subscribe(() => {
      this.snackBar.open('Cita actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    },
    error => {
      alert("Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.")
      this.snackBar.open('Fecha y hora reservadas, por favor ingrese una fecha o una hora diferente.', undefined, {
        duration: 3000,
      })
    });
  }
  cmbMascota() {
    return this.citaService
      .llenarCmb2()
      .subscribe(cita => {
        this.unidadesCita = cita;
      });
  }

  prueba(e) {
    this.seleccion = e.target.value;
  }

}



