import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCatalogoComponent } from './catalogo/agregar-catalogo/agregar-catalogo.component';
import { ListarCatalogoComponent } from './catalogo/listar-catalogo/listar-catalogo.component';
import { EditarCatalogoComponent } from './catalogo/editar-catalogo/editar-catalogo.component';
import { AgregarMascotaComponent } from './Mascota/agregar-mascota/agregar-mascota.component';
import { ListarMascotasComponent } from './Mascota/listar-mascotas/listar-mascotas.component';
import { EditarMascotaComponent } from './Mascota/editar-mascota/editar-mascota.component';
import { AcercaDeComponent } from './Utilidades/acerca-de/acerca-de.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { ActualizarExpedienteComponent } from './expe/actualizar-expediente/actualizar-expediente.component';
import { AgregarExpedienteComponent } from './expe/agregar-expediente/agregar-expediente.component';
import { MostrarExpedienteComponent } from './expe/mostrar-expediente/mostrar-expediente.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ActualizarCitaComponent } from './cita/actualizar-cita/actualizar-cita.component';
import { AgregarCitaComponent } from './cita/agregar-cita/agregar-cita.component';
import { MostrarCitaComponent } from './cita/mostrar-cita/mostrar-cita.component';

const routes: Routes = [
  { path: "mascotas", component: ListarMascotasComponent },
  { path: "mascotas/agregar", component: AgregarMascotaComponent },
  { path: "mascotas/editar/:id_mascota", component: EditarMascotaComponent },
  { path: 'usuarios', component:ListarUsuarioComponent },
  { path: 'usuarios/agregar', component: AgregarUsuarioComponent },
  { path: "usuarios/editar/:id_usuario", component: EditarUsuarioComponent },
  { path: "expediente/actualizar/:id_expediente", component:ActualizarExpedienteComponent},
  { path: 'expediente/agregar', component:AgregarExpedienteComponent },
  { path: 'expediente/mostrar', component:MostrarExpedienteComponent },
  { path: "cita/actualizar/:id_cita", component:ActualizarCitaComponent},
  { path: 'cita/agregar', component:AgregarCitaComponent },
  { path: "cita/mostrar", component:MostrarCitaComponent },
  { path: "catalogos", component: ListarCatalogoComponent },
  { path: "catalogo/agregar", component: AgregarCatalogoComponent },
  { path: "catalogo/editar/:id_catalogo", component: EditarCatalogoComponent },
  { path: "acerca-de", component: AcercaDeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registracion', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent, /*canActivate: [AuthguardGuard] */},
  { path: "", redirectTo: "home", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
