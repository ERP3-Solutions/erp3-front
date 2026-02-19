import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./finance.layout').then(l => l.LFinances),
  }
];

export default router;