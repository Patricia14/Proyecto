import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../models/registro';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  redirectUrl: string;
  baseUrl: string = "http://localhost/server/login";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private httpClient: HttpClient, private authService: SocialAuthService) { }

  public userLogin(username, password) {
    //alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Registro => {
        this.setToken(Registro[0].name);
        this.getLoggedInName.emit(true);
        return Registro;
      }));
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
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