import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModel, LoginInsertRequest } from 'src/app/core/models/login';
import { LoginService } from '@Services';


@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgIf,
    CustomTableComponent,
    MatDialogModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private LoginService = inject(LoginService);
  private dialog = inject(MatDialog);

  login = signal<LoginModel[]>([]);
  loginList: LoginModel[] = [];

  form = this.fb.nonNullable.group({
    Nombres: ['', Validators.required],
    NumeroTelefono: ['', Validators.required],
    Correo: ['', [Validators.required]],
    Contraseña: ['', [Validators.required]],
  })

  onSubmit(): void {
    if (this.form.valid){
      const { Nombres, NumeroTelefono, Correo, Contraseña} = this.form.getRawValue();
      const request: LoginInsertRequest = {
        Nombres: Nombres,
        NumeroTelefono: NumeroTelefono,
        Correo: Correo,
        Contraseña: Contraseña,
      };
    } 
  }
}