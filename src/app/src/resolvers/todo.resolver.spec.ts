import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { todoResolver } from './todo.resolver';
import { AppState } from '../store/app.store';

describe('todoResolver', () => {
  const executeResolver: ResolveFn<AppState> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => todoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
