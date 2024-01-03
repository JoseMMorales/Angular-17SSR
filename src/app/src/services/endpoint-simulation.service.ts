import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class EndpointSimulationService {
  http = inject(HttpClient);

  getTodo(ITodod: string): Observable<ITodo> {
    return this.http.get<ITodo>(
      `https://jsonplaceholder.typicode.com/todos/${ITodod}`,
    );
  }

  getAllTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
