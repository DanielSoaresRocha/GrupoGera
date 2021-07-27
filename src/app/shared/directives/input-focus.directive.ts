import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective implements AfterViewInit{
  private input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
    this.onBlur();
  }

  ngAfterViewInit (): void {
    if(this.input.value.length)
        this.input.classList.add('has-content')
  }

  onBlur(){
    this.input.addEventListener('blur', () => {
      if(this.input.value.length)
        this.input.classList.add('has-content')
      else
        this.input.classList.remove('has-content')
    })
  }

}
