import { Component, OnInit } from '@angular/core';
import { Expediente } from '../expediente';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpedienteService } from '../expediente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-expediente',
  templateUrl: './actualizar-expediente.component.html',
  styleUrls: ['./actualizar-expediente.component.css']
})
export class ActualizarExpedienteComponent implements OnInit {

  public expediente: Expediente = new Expediente(0,"");
  //unidadesExpe = [];
  opcionSeleccionadoExpe;
  unidadesExpe;
  seleccion;

  constructor(private route: ActivatedRoute,
    private router: Router, private expedienteService: ExpedienteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cmbCita();
    let idExpediente = this.route.snapshot.paramMap.get("id_expediente");
    this.expedienteService.getExpediente(idExpediente).subscribe((expediente: Expediente) => this.expediente = expediente)
  }
  volver() {
   this.router.navigate(['/expediente']);
   console.log(this.expediente);
  }
  expedientesModel = new Expediente(0, "")
  onSubmit() {

    //this.expediente.id_cita = this.unidadesExpe.indexOf(this.expediente.id_cita);
    this.expedientesModel.id_cita = this.seleccion;
    this.expedienteService.updateExpediente(this.expediente).subscribe(() => {
      this.snackBar.open('Expediente actualizado', undefined, {
        duration: 1500,
       
        
      });
      
      this.volver();
    });
  }
  cmbCita() {
    return this.expedienteService
      .obternetCita()
      .subscribe(expediente => {
        this.unidadesExpe = expediente;
      });
  }

  prueba(e) {
    this.seleccion = e.target.value;
  }

}
