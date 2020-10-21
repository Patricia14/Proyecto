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
  unidadesExpe = [];


  constructor(private route: ActivatedRoute,
    private router: Router, private expedienteService: ExpedienteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.unidadesExpe = ["1","2","3","4","5","6","7","8"];
    let idExpediente = this.route.snapshot.paramMap.get("id_expediente");
    this.expedienteService.getExpediente(idExpediente).subscribe((expediente: Expediente) => this.expediente = expediente)
  }
  volver() {
   this.router.navigate(['/expediente/mostrar']);
    //console.log(this.expediente);
  }

  onSubmit() {
    this.expediente.id_cita = this.unidadesExpe.indexOf(this.expediente.id_cita);
    //console.log(this.expediente);
    this.expedienteService.updateExpediente(this.expediente).subscribe(() => {
      this.snackBar.open('Expediente actualizado', undefined, {
        duration: 1500,
       
        
      });
      
      this.volver();
    });
  }

}
