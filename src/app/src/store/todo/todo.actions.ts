import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ITodo } from '../../models/todo.model';

export const todoApiActions = createActionGroup({
  source: 'TODO',
  events: {
    'load all': emptyProps(),
    'load all success': props<{ todos: ITodo[] }>(),
    'load all failed': emptyProps(),
    'load single': props<{ todoId: string }>(),
    'load single success': props<{ todo: ITodo }>(),
    'load single failed': emptyProps(),
  },
});
