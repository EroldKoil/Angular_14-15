import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { ProductComponent } from './productComponent.component';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ProductComponent]
})
export class ProductModule { }
