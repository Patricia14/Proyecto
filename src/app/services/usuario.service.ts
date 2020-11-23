import { Injectable,Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../models/usuario"
import { environment } from "../../environments/environment"
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = environment.baseUrl
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private http: HttpClient, private authService: SocialAuthService) { }

  getUsuarios() {
    return this.http.get(`${this.baseUrl}/usuario/getAll.php`);
  }

  getUsuario(id_usuario: string | number) {
    return this.http.get(`${this.baseUrl}/usuario/get.php?idUsuario=${id_usuario}`);
  }

  addUsuario(usuario: Usuario) {
    return this.http.post(`${this.baseUrl}/usuario/post.php`, usuario);
  }

  deleteUsuario(usuario: Usuario) {
    return this.http.delete(`${this.baseUrl}/usuario/delete.php?idUsuario=${usuario.id_usuario}`);
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put(`${this.baseUrl}/usuario/update.php`, usuario);
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
