import { NgModule} from '@angular/core';

import { FirstComponent } from './firstComponent.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    FirstComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [FirstComponent]
})
export class FirstComponentModule { }
