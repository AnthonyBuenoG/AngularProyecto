import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'registro',
      loadComponent: () => import('./registro.component').then(m => m.RegistroComponent)
    }
    // {
    //   path: ':id',
    //   loadComponent: () => import('./pages/form/form.component')
    // }
  ];
