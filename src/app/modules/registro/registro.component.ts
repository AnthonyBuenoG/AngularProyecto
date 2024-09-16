import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginInsertRequest } from 'src/app/core/models/login';  // Cambiado a LoginInsertRequest
import { RegistroService } from 'src/app/core/services/registroService';
import { Router } from '@angular/router'; // Importa Router para la redirección
import { AuthService } from 'src/app/core/services/auth.service';
import { RegistroInsertRequest } from 'src/app/core/models/registro';

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
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // Cambiado a styleUrls (plural) para que funcione correctamente
})
export class RegistroComponent implements OnInit {
  private fb = inject(FormBuilder);
  private registroService = inject(RegistroService);
  private dialog = inject(MatDialog);
  private router = inject(Router); // Inyecta el Router
  private authService = inject(AuthService); // Inyecta el AuthService para validar las credenciales

  registro = signal([]); // Uso correcto de signal sin tipo explícito
  registroList: any[] = []; // Define la lista

  // Definición del formulario con validaciones
  form = this.fb.nonNullable.group({
    Correo: ['', [Validators.required, Validators.email]], // Validación de correo
    Contraseña: ['', [Validators.required, Validators.minLength(6)]], // Validación de contraseña
  });

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { Correo, Contraseña } = this.form.getRawValue();
      const RegistroRequest: RegistroInsertRequest = {  // Usamos LoginInsertRequest en lugar de RegistroInsertRequest
        Correo: Correo,
        Contraseña: Contraseña,
      };

      // Llama al servicio para validar las credenciales
      this.authService.login(Correo, Contraseña).subscribe({
        next: (response) => {
          // Si la autenticación es exitosa
          if (response.success) {
            this.router.navigate(['/home']); // Redirige al home
          } else {
            alert('Correo o contraseña incorrectos');
          }
        },
      });
    } else {
      this.form.markAllAsTouched(); // Marca todos los campos como tocados si no es válido
    }
  }

  // Función para enfocar el siguiente campo
  nextField(nextFieldId: string) {
    const nextElement = document.getElementById(nextFieldId);
    if (nextElement) {
      nextElement.focus();
    }
  }

  // Enviar formulario
  submitForm() {
    if (this.form.valid) {
      this.onSubmit(); // Llama a la función de envío directamente
    } else {
      this.form.markAllAsTouched(); // Muestra errores si hay campos inválidos
    }
  }
}
