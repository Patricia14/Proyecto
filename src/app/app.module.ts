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
import { ListarCatalogoComponent } from './catalogo/listar-catalogo/listar-catalogo.component';
import { AgregarCatalogoComponent } from './catalogo/agregar-catalogo/agregar-catalogo.component';
import { EditarCatalogoComponent } from './catalogo/editar-catalogo/editar-catalogo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { ActualizarExpedienteComponent } from './expe/actualizar-expediente/actualizar-expediente.component';
import { AgregarExpedienteComponent } from './expe/agregar-expediente/agregar-expediente.component';
import { MostrarExpedienteComponent } from './expe/mostrar-expediente/mostrar-expediente.component';
import { ActualizarCitaComponent } from './cita/actualizar-cita/actualizar-cita.component';
import { AgregarCitaComponent } from './cita/agregar-cita/agregar-cita.component';
import { MostrarCitaComponent } from './cita/mostrar-cita/mostrar-cita.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider} from 'angularx-social-login';


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
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    ActualizarExpedienteComponent,
    AgregarExpedienteComponent,
    MostrarExpedienteComponent,
    ActualizarCitaComponent,
    AgregarCitaComponent,
    MostrarCitaComponent,
   
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
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '68716211681-f9al3te9hem55o2kjflsulje58c23pu5.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
