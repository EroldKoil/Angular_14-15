import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  highlightColor = 'lightslategrey';
  white = 'white';
  black = 'black';

  @HostBinding('style.background-color') bgColor!: string;
  @HostBinding('style.color') color!: string;

  @HostListener('mouseover') setNewColor() {
    this.bgColor = this.highlightColor;
    this.color = this.white;
  }

  @HostListener('mouseout') setDefaultColor() {
    this.bgColor = this.white;
    this.color = this.black;
  }

}