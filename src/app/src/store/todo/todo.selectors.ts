import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(selectTodoState, (state) => {
  return state.todos;
});

export const selectSingleTodo = createSelector(selectTodoState, (state) => {
  return state.todo;
});
