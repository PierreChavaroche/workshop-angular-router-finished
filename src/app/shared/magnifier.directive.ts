import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {

  constructor() { }

  @HostBinding('width') width = 200;

  @HostListener('mouseenter', ['$event'])
  onHover(e) {
    this.width = 300;
  }

}
