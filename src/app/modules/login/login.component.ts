import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModel, LoginInsertRequest } from 'src/app/core/models/login';
import { LoginService } from '@Services';
import { ElementRef, ViewChild } from '@angular/core';


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
      this.LoginService.insertLogin(request)
      .subscribe({
        next: (res) => {
          const data = res;
        },
        error: (err) => {
          console.log(err)
          // this.toastr.error('Ha Ocurrido un Error', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
    } 
    nextField(nextFieldId: string) {
      const nextElement = document.getElementById(nextFieldId);
      if (nextElement) {
        nextElement.focus();
      }
    }
  
    submitForm() {
      if (this.form.valid) {
        this.onSubmit(); // Llama a la función de envío directamente
      } else {
        this.form.markAllAsTouched(); // Muestra errores si hay campos inválidos
      }
    }
}