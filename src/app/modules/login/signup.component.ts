import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { images } from '@Constants';
import { ToastrService } from 'ngx-toastr';
// Models //
import { LoginRequest } from '@Models/Auth'
// Services //
import { LoginService } from '@Services';

@Component({
  selector: 'app-login',
  templateUrl: './signup.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class SignupComponent {
  readonly images = images;

  private fb = inject(FormBuilder);
  private auth = inject(SignupComponent);
  private router = inject(Router);
  private toastr = inject(ToastrService);  
}
