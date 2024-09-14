import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StudentModel, StudentInsertRequest } from 'src/app/core/models/students';
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
export class LoginComponent implements OnInit{
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private dialog = inject(MatDialog);

  form = this.fb.nonNullable.group({
    Nombre: ['', Validators.required],
    NumeroTelefono: ['', Validators.required],
    Correo: ['', [Validators.required]],
    Contraseña: ['', [Validators.required]],
  })

  onSubmit(): void {
    if (this.form.valid){
      const { Nombre, NumeroTelefono, Correo, Contraseña} = this.form.getRawValue();
      const request: StudentInsertRequest = {
        Nombre: Nombre,
        NumeroTelefono: NumeroTelefono,
        Correo: Correo,
        Contraseña: Contraseña,
      };
    } 
  }
}