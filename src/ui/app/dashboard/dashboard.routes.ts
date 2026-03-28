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
        data: { breadcrumb: 'dashboard.fragments_sidebar.home' }
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.routes'),
        data: { breadcrumb: 'dashboard.fragments_sidebar.sales' }
      },
      {
        path: 'finance',
        loadChildren: () => import('./finance/finance.routes'),
        data: { breadcrumb: 'dashboard.fragments_sidebar.finances' }
      },
      {
        path: 'logistic',
        loadChildren: () => import('./logistic/logistic.routes'),
        data: { breadcrumb: 'dashboard.fragments_sidebar.logistic' }
      },
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.routes'),
        data: { breadcrumb: 'dashboard.fragments_sidebar.organization' }
      },
      {
        path: 'security',
        loadChildren: () => import('./security/security.routes'),
        data: { breadcrumb: 'dashboard.fragments_sidebar.security' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default router;