import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.layout').then(l => l.LDashboard),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.routes')
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.routes')
      },
      {
        path: 'finance',
        loadChildren: () => import('./finance/finance.routes')
      },
      {
        path: 'logistic',
        loadChildren: () => import('./logistic/logistic.routes')
      },
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.routes')
      },
      {
        path: 'security',
        loadChildren: () => import('./security/security.routes')
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default router;