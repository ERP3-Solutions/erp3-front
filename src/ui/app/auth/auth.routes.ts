import { Routes } from "@angular/router";

const router: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth.layout').then(l => l.LAuth),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadComponent: () => import('./screens/login/login.screen').then(s => s.SAuthLogin)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
]

export default router