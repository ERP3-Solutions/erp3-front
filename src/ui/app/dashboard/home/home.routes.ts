import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.layout').then(l => l.LHome),
  }
];

export default router;