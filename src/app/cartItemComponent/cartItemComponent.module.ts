import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { CartItemComponent } from './cartItemComponent.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  exports: [CartItemComponent]
})
export class CartItemModule { }
