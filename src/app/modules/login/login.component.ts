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
//import { SignupService } from 'src/app/core/services/signup.service';

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
 // private authh = inject(SignupService);
  private router = inject(Router);
  private toastr = inject(ToastrService);  
}
