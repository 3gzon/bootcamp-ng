import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective implements AfterViewChecked {
  @Input() backgroundColor!: string;

  constructor(private el: ElementRef) {}
  ngAfterViewChecked(): void {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}
