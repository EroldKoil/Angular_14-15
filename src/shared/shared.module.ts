import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { HighlightDirective } from './directives/highlightDirective';
import { FontSizeChangerDirective } from './directives/fontSizeChangerDirective';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HighlightDirective,
    FontSizeChangerDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [
    HighlightDirective, 
    FontSizeChangerDirective, 
    OrderByPipe, 
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
