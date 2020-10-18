import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarMascotaComponent } from './Mascota/agregar-mascota/agregar-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';
import { ListarMascotasComponent } from './Mascota/listar-mascotas/listar-mascotas.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DialogoConfirmacionComponent } from './Utilidades/dialogo-confimacion/dialogo-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarMascotaComponent } from './Mascota/editar-mascota/editar-mascota.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AcercaDeComponent } from './Utilidades/acerca-de/acerca-de.component';
import { ListarCatalogoComponent } from './listar-catalogo/listar-catalogo.component';
import { AgregarCatalogoComponent } from './agregar-catalogo/agregar-catalogo.component';
import { EditarCatalogoComponent } from './editar-catalogo/editar-catalogo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarMascotaComponent,
    ListarMascotasComponent,
    DialogoConfirmacionComponent,
    EditarMascotaComponent,
    AcercaDeComponent,
    ListarCatalogoComponent,
    AgregarCatalogoComponent,
    EditarCatalogoComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    UsuarioComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
  ],
  entryComponents: [
    DialogoConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
