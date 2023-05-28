import { NgModule} from '@angular/core';

import { CartItemComponent } from './cartItemComponent.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CartItemComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [CartItemComponent]
})
export class CartItemModule { }
