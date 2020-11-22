
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from "../models/mascota"
import { environment } from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getMascota(id_mascota: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id_mascota}`);
  }

  addMascota(mascota: Mascota) {
    return this.http.post(`${this.baseUrl}/post.php`, mascota);
  }

  deleteMascota(mascota: Mascota) {
    return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${mascota.id_mascota}`);
  }

  updateMascota(mascota: Mascota) {
    return this.http.put(`${this.baseUrl}/update.php`, mascota);
  }
  obternerUsuario(){
    return this.http.get(`${this.baseUrl}/cmbUsuario.php`);
  }
}
