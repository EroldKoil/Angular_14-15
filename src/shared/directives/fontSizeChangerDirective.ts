import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fontSizeChanger]'
})
export class FontSizeChangerDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  minSize = 14;
  maxSize = 24;
  range = 2;
  size = this.minSize;

  @HostListener('click') setNewSize() {
    this.size = this.size + this.range > this.maxSize ? this.minSize : this.size + this.range;

    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.size + 'px');
  }
}