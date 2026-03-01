import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./finance.layout').then(l => l.LFinances),
    children: [
      {
        path: 'accounts',
        loadComponent: () => import('./screens/accounts/accounts.screen').then(l => l.SFinanceAccounts),
      },
      {
        path: 'methods',
        loadComponent: () => import('./screens/methods/methods.screen').then(l => l.SFinanceMethods),
      },
      {
        path: 'conditions',
        loadComponent: () => import('./screens/conditions/conditions.screen').then(l => l.SFinanceConditions),
      },
    ]
  }
];

export default router;