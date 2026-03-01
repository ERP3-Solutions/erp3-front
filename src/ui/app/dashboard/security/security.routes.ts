import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./security.layout').then(l => l.LSecurity),
    children: [
      {
        path: 'users',
        loadComponent: () => import('./screens/users/users.screen').then(l => l.SSecurityUsers),
      },
      {
        path: 'roles',
        loadComponent: () => import('./screens/roles/roles.screen').then(l => l.SSecurityRoles),
      },
    ]
  },
];

export default router;