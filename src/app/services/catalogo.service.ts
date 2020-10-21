
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from "../models/catalogo"
import { environment } from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getCatalogos() {
    return this.http.get(`${this.baseUrl}/catalogo/getAllCatalogo.php`);
  }

  getCatalogo(id_catalogo: string | number) {
    return this.http.get(`${this.baseUrl}/catalogo/getCatalogo.php?idCatalogo=${id_catalogo}`);
  }

  addCatalogo(catalogo: Catalogo) {
    return this.http.post(`${this.baseUrl}/catalogo/postCatalogo.php`, catalogo);
  }

  deleteCatalogo(catalogo: Catalogo) {
    return this.http.delete(`${this.baseUrl}/catalogo/deleteCatalogo.php?idCatalogo=${catalogo.id_catalogo}`);
  }

  updateCatalogo(catalogo: Catalogo) {
    return this.http.put(`${this.baseUrl}/catalogo/updateCatalogo.php`, catalogo);
  }
}
