import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './productListComponent/productListComponent.component';
import { ProductComponent } from './productComponent/productComponent.component';
import { CartListComponent } from './cartListComponent/cartListComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
