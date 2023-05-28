import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { HighlightDirective } from './directives/highlightDirective';
import { FontSizeChangerDirective } from './directives/fontSizeChangerDirective';

@NgModule({
  declarations: [
    HighlightDirective,
    FontSizeChangerDirective
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [HighlightDirective, FontSizeChangerDirective]
})
export class SharedModule { }
