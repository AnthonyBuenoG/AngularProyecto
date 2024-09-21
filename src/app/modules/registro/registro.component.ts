import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal, OnInit,  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table'
import { RegistroModel } from 'src/app/core/models/registro/registro-model';
import { RegistroService } from 'src/app/core/services/registro.service';
import { RegistroInsertRequest } from 'src/app/core/models/registro/registro-model';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgIf,
    CustomTableComponent,
    MatButtonModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  private fb = inject(FormBuilder);
  // private RegistroService = inject(RegistroService);
  private RegistroService = inject(RegistroService);
  private dailog = inject(MatDialog)

  registro = signal<RegistroModel[]>([]);
  registroList: RegistroModel[] = [];

  form = this.fb.nonNullable.group({
    Nombres: ['', Validators.required],
    NumeroTelefono: ['', Validators.required],
    Correo: ['', [Validators.required]],
    Contraseña: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      const { Nombres, NumeroTelefono, Correo, Contraseña } = this.form.getRawValue();
      const request: RegistroInsertRequest = {
        Nombres: Nombres,
        NumeroTelefono: NumeroTelefono,
        Correo: Correo,
        Contraseña: Contraseña,
      };
      this.RegistroService.insertRegistro(request)
        .subscribe({
          next: (res) => {
            const data = res;
            this.clearForm(); // Limpiar el formulario después del éxito
          },
          error: (err) => {
            console.log(err);
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

  // Nueva función para limpiar el formulario
  clearForm() {
    this.form.reset(); // Restablece todos los campos del formulario a sus valores iniciales
  }
}
