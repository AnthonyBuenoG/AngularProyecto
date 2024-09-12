import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
//import { SignupComponent } from './signup.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  // {
  //   path: 'signup',
  //   component: LoginComponent
  // }
];
