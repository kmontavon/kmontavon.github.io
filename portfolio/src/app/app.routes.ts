import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Kevin Montavon - Home',
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'about',
    title: 'Kevin Montavon - About',
    loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent),
  },
];
