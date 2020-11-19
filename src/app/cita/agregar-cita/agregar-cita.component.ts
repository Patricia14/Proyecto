import { Component, OnInit } from '@angular/core';
import { CitaService } from '../cita.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cita } from '../cita';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})

export class AgregarCitaComponent implements OnInit {
  constructor(private citaService: CitaService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  citaModel = new Cita("",0 )

  onSubmit() {
    this.citaService.addCita(this.citaModel).subscribe(() => {
      this.snackBar.open('Cita guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/cita/mostrar']);
    })
  }


}
