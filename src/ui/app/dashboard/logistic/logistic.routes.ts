import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./logistic.layout').then(l => l.LLogistic),
  }
];

export default router;