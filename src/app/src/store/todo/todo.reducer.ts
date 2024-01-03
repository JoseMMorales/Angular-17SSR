import { createReducer, on } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';
import { todoApiActions } from './todo.actions';

export interface TodoState {
  todos: ITodo[];
  todo: ITodo;
}

const initialTodoState: TodoState = {
  todos: [] as ITodo[],
  todo: {} as ITodo,
};

export function todosReducer(state: any, action: any) {
  return createReducer(
    initialTodoState,
    on(todoApiActions.loadAll, (state) => {
      return { ...state };
    }),
    on(todoApiActions.loadAllSuccess, (state, action) => {
      return { ...state, todos: action.todos };
    }),
    on(todoApiActions.loadAllFailed, (state) => {
      return { ...state };
    }),
    on(todoApiActions.loadSingle, (state) => {
      return { ...state };
    }),
    on(todoApiActions.loadSingleSuccess, (state, action) => {
      return { ...state, todo: action.todo };
    }),
    on(todoApiActions.loadSingleFailed, (state) => {
      return { ...state };
    }),
  )(state, action);
}
