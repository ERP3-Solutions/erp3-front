import { Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./logistic.layout').then(l => l.LLogistic),
    children: [
      {
        path: 'warehouses',
        loadComponent: () => import('./screens/warehouses/warehouses.screen').then(l => l.SLogisticWarehouses),
      },
      {
        path: 'products',
        loadComponent: () => import('./screens/products/products.screen').then(l => l.SLogisticProducts),
      },
      {
        path: 'categories',
        loadComponent: () => import('./screens/categories/categories.screen').then(l => l.SLogisticCategories),
      },
      {
        path: 'list-prices',
        loadComponent: () => import('./screens/list-prices/list-prices.screen').then(l => l.SLogisticListPrices),
      },
    ]
  }
];

export default router;