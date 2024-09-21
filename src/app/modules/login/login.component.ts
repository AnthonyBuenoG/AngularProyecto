import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { images } from '@Constants';
import { ToastrService } from 'ngx-toastr';
// Models //
import { LoginRequest } from '@Models/Auth'
// Services //
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class LoginComponent {
  readonly images = images;

  private fb = inject(FormBuilder);
  private auth = inject(LoginService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  
  form = this.fb.nonNullable.group({
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.form.valid) {
      const { usuario, password } = this.form.getRawValue();
      const request: LoginRequest = {
        username: usuario,
        userpassword: password
      };
      this.auth.auth(request)
        .subscribe({
          next: (res) => {
            const data = res.Response.data;
            localStorage.setItem('token', data.Token);
            localStorage.setItem('idUsuario', data.Usuario.Id.toString());
            localStorage.setItem('idPerfil', data.Usuario.IdPerfil.toString());
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
