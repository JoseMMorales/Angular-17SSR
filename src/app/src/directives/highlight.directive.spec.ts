import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = {
      nativeElement: {
        style: {
          backgroundColor: '',
          width: '',
        },
      },
    };
    const directive: HighlightDirective = new HighlightDirective(
      mockElementRef,
    );

    expect(directive).toBeTruthy();
  });
});
