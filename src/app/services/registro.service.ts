import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  redirectUrl: string;
  baseUrl: string = "http://localhost/server/login";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public userLogin(username, password) {
    //alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Registro => {
        this.setToken(Registro[0].name);
        this.getLoggedInName.emit(true);
        return Registro;
      }));
  }
  public userregistration(name, apellido, email, pwd, tipo) {
    return this.httpClient.post<any>(this.baseUrl + '/registro.php', { name, apellido, email, pwd, tipo })
      .pipe(map(Registro => {
        return Registro;
      }));
  }
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}