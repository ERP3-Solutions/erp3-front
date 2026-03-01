import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./sales.layout').then(l => l.LSales),
    children: [
      {
        path: 'boxes',
        loadComponent: () => import('./screens/boxes/boxes.screen').then(l => l.SSalesBoxes),
      },
      {
        path: 'point-sales',
        loadComponent: () => import('./screens/point-sales/point-sales.screen').then(l => l.SSalesPointSales),
      },
      {
        path: 'vouchers',
        loadComponent: () => import('./screens/vouchers/vouchers.screen').then(l => l.SSalesVouchers),
      },
    ]
  },
];

export default router;