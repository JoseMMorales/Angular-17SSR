import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponent } from './async.component';
import { HttpClientModule } from '@angular/common/http';
import { EndpointSimulationService } from '../../services/endpoint-simulation.service';
import { HighlightDirective } from '../../directives/highlight.directive';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncComponent, HttpClientModule, HighlightDirective],
      providers: [EndpointSimulationService],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
