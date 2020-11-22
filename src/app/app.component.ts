import { Component } from '@angular/core';
import { RegistroService } from './services/registro.service';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Registro } from './models/registro';
import { Router } from '@angular/router';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Verterinaria pets';
  usuario: Registro
  loginbtn: boolean;
  logoutbtn: boolean;
  user: SocialUser;
  loggedIn: boolean;
  tokenName: string;

  constructor(private dataService: RegistroService, private authService: SocialAuthService, private router: Router,
    private permissionsService: NgxPermissionsService, private rolesService: NgxRolesService) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
  }

  ngOnInit() {
    this.tokenName = this.dataService.getTokenName();
    this.permissionsService.loadPermissions([this.dataService.getToken()]);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    });
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = "/home";
  }
}
