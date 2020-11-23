
import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from "./cita";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CitaService {
  baseUrl = environment.baseUrl
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getCitas() {
    return this.http.get(`${this.baseUrl}/cita/getAllcita.php`);
  }

  getCita(id_cita: string | number) {
    return this.http.get(`${this.baseUrl}/cita/getcita.php?idCita=${id_cita}`);
  }

  addCita(cita: Cita) {
    return this.http.post(`${this.baseUrl}/cita/postcita.php`, cita);
  }

  public userregistration(fecha, hora, descripcion, idCliente) {
    return this.http.post<any>(this.baseUrl + '/cita/postcita.php', { fecha, hora, descripcion, idCliente })
      .pipe(map(Cita => {
        return Cita;
      }));
  }

  deleteCita(cita: Cita) {
    return this.http.delete(`${this.baseUrl}/cita/deletecita.php?idCita=${cita.id_cita}`);
  }

  updateCita(cita: Cita) {
    return this.http.put(`${this.baseUrl}/cita/updatecita.php`, cita);
  }
  llenarCmb(id_usuario: string | number){
    //return this.http.get(`${this.baseUrl}/cita/cmbMascota.php?idUsuario=${id_usuario}`);
    return this.http.post<any>(this.baseUrl + '/cita/cmbMascota.php', { id_usuario })
  }

  llenarCmb2(){
    //return this.http.get(`${this.baseUrl}/cita/cmbMascota.php?idUsuario=${id_usuario}`);
    return this.http.get(`${this.baseUrl}/cita/cmbMasAdmin.php`)
  }
  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
