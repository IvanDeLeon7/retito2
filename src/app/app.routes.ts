import { Routes } from '@angular/router';
import { Listado } from './listado/listado';
import { Dardealta } from './dardealta/dardealta';

export const routes: Routes = [
  {
    path: '',
    component: Listado
  },
  {
    path: "listado",
    component: Listado
  },
  {
    path: 'dardealta',
    component: Dardealta
  },
  {
    path: '**',
    redirectTo: 'listado',
  }
];
