import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'

import { FirstComponent } from './firstComponent.component';

@NgModule({
  declarations: [
    FirstComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [FirstComponent]
})
export class FirstComponentModule { }
