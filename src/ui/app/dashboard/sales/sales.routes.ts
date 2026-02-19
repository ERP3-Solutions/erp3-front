import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./sales.layout').then(l => l.LSales),
  },
];

export default router;