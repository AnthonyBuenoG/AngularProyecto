import { RegistroComponent } from './registro.component';
import { HomeComponent } from '@Component/Home';
import { Routes } from '@angular/router';
import { AuthGuard } from '@Guards';
//import { SignupComponent } from './modules/login/signup.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   loadChildren: () => import('./registro.component').then(m => m.routes),
  // }
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./registro.component').then(m => m.RegistroComponent)
  }
];
