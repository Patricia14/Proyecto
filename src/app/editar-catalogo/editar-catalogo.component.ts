import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoService } from "../services/catalogo.service"
import { Catalogo } from '../models/catalogo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-catalogo',
  templateUrl: './editar-catalogo.component.html',
  styleUrls: ['./editar-catalogo.component.css']
})
export class EditarCatalogoComponent implements OnInit {
  public catalogo: Catalogo = new Catalogo("", 0, "", "");

  constructor(private route: ActivatedRoute,
    private router: Router, private catalogoService: CatalogoService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idCatalogo = this.route.snapshot.paramMap.get("id_catalogo");
    this.catalogoService.getCatalogo(idCatalogo).subscribe((catalogo: Catalogo) => this.catalogo = catalogo)
  }

  volver() {
    this.router.navigate(['/editar-catalogo']);
  }

  onSubmit() {
    this.catalogoService.updateCatalogo(this.catalogo).subscribe(() => {
      this.snackBar.open('Catalogo actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
