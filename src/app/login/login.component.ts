import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: RegistroService, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postData(angForm1) {
    this.dataService.userLogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        },
        error => {
          alert("Usuario o contraseña incorrectos")
        });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }

}
