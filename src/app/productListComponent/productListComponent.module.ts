import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { ProductListComponent } from './productListComponent.component';
import { ProductModule } from '../productComponent/productComponent.module';
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListModule { }
