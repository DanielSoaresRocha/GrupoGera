import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective implements OnInit{

  constructor(el: ElementRef) {
      el.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit (): void {
    console.log('iniciiou')
  }

}
