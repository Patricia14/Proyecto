import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { Router, ActivatedRoute } from '@angular/router';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { time } from 'console';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {
  public cita: Cita = new Cita("", 0);
  unidadesCita = [];


  constructor(private route: ActivatedRoute,
    private router: Router, private citaService: CitaService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.unidadesCita = ["23","24","2"];
    let idCita = this.route.snapshot.paramMap.get("id_cita");
    this.citaService.getCita(idCita).subscribe((cita: Cita) => this.cita = cita)
   
  }
  volver() {
  this.router.navigate(['/cita/mostrar']);
   console.log(this.cita);
  }

  onSubmit() {
    this.cita.id_cliente = this.unidadesCita.indexOf(this.cita.id_cliente);
      console.log(this.cita);
    this.citaService.updateCita(this.cita).subscribe(() => {
      this.snackBar.open('Cita actualizado', undefined, {
        duration: 1500,
       
        
      });
      
      this.volver();
    });
  }
}



