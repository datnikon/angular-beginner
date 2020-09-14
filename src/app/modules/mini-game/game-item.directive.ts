import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGameItem]'
})
export class GameItemDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'hotpink';
 }
}
