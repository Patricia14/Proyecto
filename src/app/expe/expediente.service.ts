
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expediente } from "./expediente"

import { environment } from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getExpedientes() {
    return this.http.get(`${this.baseUrl}/expediente/getAllex.php`);
  }

  getExpediente(id_expediente: string | number) {
    return this.http.get(`${this.baseUrl}/expediente/getex.php?idExpediente=${id_expediente}`);
  }

  addExpediente(expediente: Expediente) {
    return this.http.post(`${this.baseUrl}/expediente/postex.php`, expediente);
  }

  deleteExpediente(expediente: Expediente) {
    return this.http.delete(`${this.baseUrl}/expediente/deleteex.php?idExpediente=${expediente.id_expediente}`);
  }

  updateExpediente(expediente: Expediente) {
    return this.http.put(`${this.baseUrl}/expediente/updateex.php`, expediente);
  }
}
