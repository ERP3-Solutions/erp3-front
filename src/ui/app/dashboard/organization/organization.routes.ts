import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./organization.layout').then(l => l.LOrganization),
  }
];

export default router;