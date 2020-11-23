import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../../models/catalogo';
import { CatalogoService } from "../../services/catalogo.service"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-agregar-catalogo',
  templateUrl: './agregar-catalogo.component.html',
  styleUrls: ['./agregar-catalogo.component.css']
})
export class AgregarCatalogoComponent implements OnInit {
  opcionSeleccionado: string;
  unidades;
  angForm: FormGroup;
  loginbtn: boolean;
  logoutbtn: boolean;
  tipo: string;

  prueba: string;
  loggedIn: boolean;

  constructor(private catalogoService: CatalogoService,
 
    private fb: FormBuilder,
    private dataService: CatalogoService,
    private usuarioService: CatalogoService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {this.angForm = this.fb.group({
    precio: ['', Validators.compose([Validators.required])],
      codigo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descripcion: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])],
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])]
  });

  dataService.getLoggedInName.subscribe(nombre => this.changeName(nombre));
  if (this.dataService.isLoggedIn()) {
    console.log("loggedin");
    this.loginbtn = false;
    this.logoutbtn = true
  }
  else {
    this.loginbtn = true;
    this.logoutbtn = false
  } }

  ngOnInit() {
  }
  catalogoModel = new Catalogo("", undefined, "","" )
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  onSubmit() {
    this.catalogoService.addCatalogo(this.catalogoModel).subscribe(() => {
      this.snackBar.open('Catalogo guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/catalogos']);
    })
  }
  get nombre() { return this.angForm.get('nombre'); }
  get precio() { return this.angForm.get('precio'); }
  get codigo() { return this.angForm.get('codigo'); }
  get descripcion() { return this.angForm.get('descripcion') }
}