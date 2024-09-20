
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { images } from '@Constants';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Asegúrate de tener ngx-toastr instalado si lo usas

import { RegistroService } from 'src/app/core/services/registroService';
import { RegistroRequest } from 'src/app/core/models/registro';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class RegistroComponent {
  readonly images = images;
  private fb = inject(FormBuilder);
  private auth = inject(RegistroService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  
  form = this.fb.nonNullable.group({
    Correo: ['', [Validators.required]],
    Contraseña: ['', [Validators.required, Validators.minLength(10)]]
  });
  onSubmit(): void {
    if (this.form.valid) {
      const { Correo, Contraseña } = this.form.getRawValue();
      const request: RegistroRequest = {
        Correo: Correo,
        Contraseña: Contraseña
      };
      this.auth.auth(request)
        .subscribe({
          next: (res) => {
            console.log(res);
            const data = res.response.data;
            localStorage.setItem('Correo', data.Correo);
            localStorage.setItem('Contraseña', data.Contraseña);
            if (!localStorage.getItem('mode')) {
              localStorage.setItem('mode', 'light');
            }
            this.router.navigate(['/home']);
          },   
          error: (err) => {
                  this.toastr.error('Ha Ocurrido un Error', err);
          }
          
        });
      this.auth.auth(request).subscribe({
        next: (res) => {
          const data = res.response.data;
            console.log(data)
            localStorage.setItem('Correo', data.Correo);
            localStorage.setItem('Contraseña', data.Contraseña);
            if (!localStorage.getItem('mode')) {
              localStorage.setItem('mode', 'light');
            }
            this.router.navigate(['/home']);
        
            this.toastr.error('Respuesta inesperada de la API.');
          
        },
        error: (err) => {
          this.toastr.error('Ha Ocurrido un Error', err);
        }
      });                                     
      this.auth.auth(request)
        .subscribe({
          next: (res) => {
            const data = res.response?.data;
            console.log(res.response)
            localStorage.setItem('Correo', data.Correo);
            localStorage.setItem('Contraseña', data.Contraseña);
            if(!localStorage.getItem('mode')){
              localStorage.setItem('mode', 'light');
            }
            this.router.navigate(['/home']);
          },
          error: (err) => {
            this.toastr.error('Ha Ocurrido un Error', err);
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
}
