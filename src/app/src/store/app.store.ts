import { ActionReducerMap } from '@ngrx/store';
import { TodoState, todosReducer } from './todo/todo.reducer';

export interface AppState {
  todos: TodoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
};
