import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./organization.layout').then(l => l.LOrganization),
    children: [
      {
        path: 'branches',
        loadComponent: () => import('./screens/branches/branches.screen').then(l => l.SOrganizationBranches),
      },
      {
        path: 'series',
        loadComponent: () => import('./screens/electronic-series/electronic-series.screen').then(l => l.SOrganizationElectronicSeries),
      },
      {
        path: 'organization-profile',
        loadComponent: () => import('./screens/organization-profile/organization-profile.screen').then(l => l.SOrganizationOrganizationProfile),
      },
      {
        path: 'user-profile',
        loadComponent: () => import('./screens/user-profile/user-profile.screen').then(l => l.SOrganizationUserProfile),
      },
    ]
  }
];

export default router;