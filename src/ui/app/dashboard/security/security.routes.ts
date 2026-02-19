import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./security.layout').then(l => l.LSecurity),
  },
];

export default router;