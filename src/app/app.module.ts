import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './productListComponent/productListComponent.module';
import { CartListModule } from './cartListComponent/cartListComponent.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstComponentModule } from './firstComponent/firstComponent.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    CartListModule,
    FirstComponentModule,
    NgbModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule { }
