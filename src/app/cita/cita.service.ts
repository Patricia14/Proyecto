
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from "./cita"
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class CitaService {
  baseUrl = environment.baseUrl

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
  obternerCita(){
    return this.http.get(`${this.baseUrl}/cita/cmbMascota.php`);
  }
}
