import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EndpointSimulationService } from '../../services/endpoint-simulation.service';
import { ITodo } from '../../models/todo.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.store';
import { todoApiActions } from '../../store/todo/todo.actions';
import {
  selectAllTodos,
  selectSingleTodo,
} from '../../store/todo/todo.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [CommonModule, JsonPipe, AsyncPipe, HighlightDirective, FormsModule],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss',
})
export class AsyncComponent implements OnInit {
  todoNumber: number = 0;
  singleData$: Observable<ITodo> = of({} as ITodo);
  allData$: Observable<ITodo[]> = of([]);

  store: Store<AppState> = inject(Store<AppState>);
  endpointSimulationService: EndpointSimulationService = inject(
    EndpointSimulationService,
  );

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.allData$ = this.store.select(selectAllTodos);
    this.singleData$ = this.store.select(selectSingleTodo);
  }

  getAndSetTodoNumber(todoNumber: number): void {
    this.store.dispatch(
      todoApiActions.loadSingle({ todoId: todoNumber.toString() }),
    );
  }
}
