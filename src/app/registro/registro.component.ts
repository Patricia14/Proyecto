import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  angForm: FormGroup;
  loginbtn: boolean;
  logoutbtn: boolean;
  tipo: string;
  private user: SocialUser;
  prueba: string;
  loggedIn: boolean;

  constructor(private fb: FormBuilder, private dataService: RegistroService, private router: Router, 
    private authService: SocialAuthService,
    private snackBar: MatSnackBar,) {
    this.angForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['', Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])],
      apellido: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]{2,254}')])]
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
    });
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

  postdata(angForm1) {
    this.tipo = "2";
    this.dataService.userregistration(angForm1.value.name, angForm1.value.apellido, angForm1.value.email, angForm1.value.password, this.tipo)
      .pipe(first())
      .subscribe(
        data => {
          this.snackBar.open('Registro Completo', undefined, {
            duration: 3000,
          });
          this.router.navigate(['login']);
        },
        error => {
          alert("Este usuario ya existe")
        });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get apellido() { return this.angForm.get('apellido') }
}