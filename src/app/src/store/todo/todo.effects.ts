import { Injectable } from '@angular/core';

import {
  Actions,
  CreateEffectMetadata,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { todoApiActions } from './todo.actions';
import { EndpointSimulationService } from '../../services/endpoint-simulation.service';
import { TypedAction } from '@ngrx/store/src/models';
import { ITodo } from '../../models/todo.model';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todosService: EndpointSimulationService,
  ) {}

  loadAllTodos$: Observable<
    ({ todos: ITodo[] } & TypedAction<string>) | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoApiActions.loadAll),
      mergeMap(() => {
        return this.todosService.getAllTodos().pipe(
          map((todos) => {
            return todoApiActions.loadAllSuccess({
              todos: todos,
            });
          }),
          catchError(() => of(todoApiActions.loadAllFailed())),
        );
      }),
    );
  });

  loadSingleTodo$: Observable<
    ({ todo: ITodo } & TypedAction<string>) | TypedAction<string>
  > &
    CreateEffectMetadata = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoApiActions.loadSingle),
      mergeMap((action) => {
        return this.todosService.getTodo(action.todoId).pipe(
          map((todo) => {
            return todoApiActions.loadSingleSuccess({
              todo: todo,
            });
          }),
          catchError(() => of(todoApiActions.loadSingleFailed())),
        );
      }),
    );
  });
}
