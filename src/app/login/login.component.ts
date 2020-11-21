import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;
  angForm: FormGroup;
  tipo: string;
  pwd: string;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private fb: FormBuilder, private dataService: RegistroService, private router: Router, private authService: SocialAuthService) {
    this.angForm = this.fb.group({
      email: [''],
      password: ['']
    });

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
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("loggedin");
      this.angForm.setValue({email: this.user.email, password: this.pwd});
      this.dataService.userregistration(this.user.firstName, this.user.lastName, this.user.email, this.pwd, this.tipo)
      .pipe(first())
      .subscribe(
        data => {
          alert("La contraseña para el ingreso es:" + this.pwd)
        },
        error => {
          this.dataService.deleteToken();
          this.angForm.setValue({email: this.user.email, password: ''});
          this.loginbtn = true;
          this.logoutbtn = false;
          alert("Este usuario ya esta registrado con ese correo")
        });
    });
  }

  signInWithGoogle(): void {
    try {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.router.navigate(['login']);
      this.pwd = this.makeid();
      this.tipo = '2';
    }
    catch (error) { console.log(error) }
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

  postData(angForm1) {
    this.dataService.userLogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          alert("Usuario o contraseña incorrectos")
        });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
