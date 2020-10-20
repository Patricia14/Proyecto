import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../models/usuario"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

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
}
