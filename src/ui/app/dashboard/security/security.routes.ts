import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./security.layout').then(l => l.LSecurity),
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadComponent: () => import('./screens/users/users.screen').then(l => l.SSecurityUsers),
        data: { breadcrumb: 'dashboard.fragments_sidebar.security_users' }
      },
      {
        path: 'roles',
        loadComponent: () => import('./screens/roles/roles.screen').then(l => l.SSecurityRoles),
        data: { breadcrumb: 'dashboard.fragments_sidebar.security_roles' }
      },
    ]
  },
];

export default router;