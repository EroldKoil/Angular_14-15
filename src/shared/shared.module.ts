import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { HighlightDirective } from './highlightDirective';

@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [HighlightDirective]
})
export class SharedModule { }
