import { NgModule} from '@angular/core';

import { ProductListComponent } from './productListComponent.component';
import { ProductModule } from '../productComponent/productComponent.module';
import { SharedModule } from 'src/shared/shared.module';
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    SharedModule,
    ProductModule
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListModule { }
