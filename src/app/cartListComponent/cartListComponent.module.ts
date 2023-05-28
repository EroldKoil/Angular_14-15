import { NgModule} from '@angular/core';

import { CartListComponent } from './cartListComponent.component';
import { CartItemModule } from '../cartItemComponent/cartItemComponent.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CartItemModule,
    SharedModule
  ],
  providers: [],
  exports: [CartListComponent]
})
export class CartListModule { }
