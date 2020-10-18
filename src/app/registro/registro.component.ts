import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  angForm: FormGroup;
  tipo: string;
  constructor(private fb: FormBuilder, private dataService: RegistroService, private router: Router) {

    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1) {
    this.tipo = "3";
    this.dataService.userregistration(angForm1.value.name, angForm1.value.apellido, angForm1.value.email, angForm1.value.password, this.tipo)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },

        error => {
        });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get apellido() {return this.angForm.get('apellido')}
}