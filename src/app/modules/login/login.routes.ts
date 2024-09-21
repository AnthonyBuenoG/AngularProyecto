import { HomeComponent } from '@Component/Home';
import { Routes } from '@angular/router';
import { AuthGuard } from '@Guards';
import { LoginComponent } from './login.component';
//import { SignupComponent } from './modules/login/signup.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   loadChildren: () => import('./registro.component').then(m => m.routes),
  // }
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./login.component').then(m => m.LoginComponent)
  }
];
