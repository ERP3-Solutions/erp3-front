import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes')
  },
  {
    path: '**',
    redirectTo: '',
  },
];
