

import { Catalogo } from "../models/catalogo"
import { Injectable,Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../models/usuario"
import { environment } from "../../environments/environment"
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  baseUrl = environment.baseUrl
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
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
