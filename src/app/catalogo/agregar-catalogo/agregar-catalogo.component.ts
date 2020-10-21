import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-catalogo',
  templateUrl: './agregar-catalogo.component.html',
  styleUrls: ['./agregar-catalogo.component.css']
})
export class AgregarCatalogoComponent implements OnInit {
  constructor(private catalogoService: CatalogoService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  catalogoModel = new Catalogo("", undefined, "","" )

  onSubmit() {
    this.catalogoService.addCatalogo(this.catalogoModel).subscribe(() => {
      this.snackBar.open('Catalogo guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/catalogo']);
    })
  }

}