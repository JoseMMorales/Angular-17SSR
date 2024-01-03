import { Routes } from '@angular/router';

export const AsyncRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./async.component').then((c) => c.AsyncComponent),
  },
];
