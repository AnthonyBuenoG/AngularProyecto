import { Routes } from '@angular/router';
import { HomeComponent } from '@Component/Home';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo:'login',
                pathMatch:'full'
            },
           
           
           
         
           
         
           

        ]
    },
];