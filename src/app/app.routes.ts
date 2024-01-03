import { Routes } from '@angular/router';

import { todoResolver } from './src/resolvers/todo.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/async', pathMatch: 'full' },
  {
    path: 'async',
    loadChildren: () =>
      import('./src/components/async/async-routes').then(
        (routes) => routes.AsyncRoutes,
      ),
    resolve: { todos: todoResolver },
  },
];
