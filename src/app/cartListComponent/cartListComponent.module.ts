import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { CartListComponent } from './cartListComponent.component';
import { CartItemModule } from '../cartItemComponent/cartItemComponent.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartItemModule,
    SharedModule
  ],
  providers: [],
  exports: [CartListComponent]
})
export class CartListModule { }
