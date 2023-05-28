import { NgModule} from '@angular/core';

import { ProductComponent } from './productComponent.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [ProductComponent]
})
export class ProductModule { }
