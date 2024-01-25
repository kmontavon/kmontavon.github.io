import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/header-page/header-page.component').then(m => m.HeaderPageComponent),
  },
];
