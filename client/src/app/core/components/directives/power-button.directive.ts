import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[powerButton]'
})
export class PowerButtonDirective {
  element: ElementRef;
  originalWidith: number = 0;

  constructor(el: ElementRef) {
    this.element = el;

    this.element.nativeElement.style.transition = 'width 1s ease-in-out';
    this.element.nativeElement.style.minWidth = `40px`;

  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.originalWidith = this.element.nativeElement.offsetWidth;

    this.element.nativeElement.style.cursor = 'pointer';
    this.element.nativeElement.style.width = `${this.originalWidith * 1.2}px`;

  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.element.nativeElement.style.width = `${this.originalWidith}px`
  }
}
