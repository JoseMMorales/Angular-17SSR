import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.store';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { todoApiActions } from '../store/todo/todo.actions';

export const todoResolver: ResolveFn<AppState> = (
  _route,
  _state,
): Observable<AppState> => {
  const store: Store<AppState> = inject(Store<AppState>);

  return store.pipe(
    tap(() => {
      store.dispatch(todoApiActions.loadAll());
    }),
  );
};
