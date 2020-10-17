
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AgregarCatalogoComponent } from './agregar-catalogo/agregar-catalogo.component';
import { ListarCatalogoComponent } from './listar-catalogo/listar-catalogo.component';

const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "mascotas", component: ListarMascotasComponent },
  { path: "listar-catalogo", component: ListarCatalogoComponent },
  { path: "agregar-catalogo", component: AgregarCatalogoComponent },
  { path: "mascotas/agregar", component: AgregarMascotaComponent },
  { path: "mascotas/editar/:id_mascota", component: EditarMascotaComponent },
  { path: "", redirectTo: "/mascotas", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/mascotas" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
