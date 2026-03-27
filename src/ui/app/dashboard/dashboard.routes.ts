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
        loadChildren: () => import('./home/home.routes'),
        data: { breadcrumb: 'Home' }
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.routes'),
        data: { breadcrumb: 'Sales' }
      },
      {
        path: 'finance',
        loadChildren: () => import('./finance/finance.routes'),
        data: { breadcrumb: 'Finance' }
      },
      {
        path: 'logistic',
        loadChildren: () => import('./logistic/logistic.routes'),
        data: { breadcrumb: 'Logistic' }
      },
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.routes'),
        data: { breadcrumb: 'Organization' }
      },
      {
        path: 'security',
        loadChildren: () => import('./security/security.routes'),
        data: { breadcrumb: 'Security' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default router;