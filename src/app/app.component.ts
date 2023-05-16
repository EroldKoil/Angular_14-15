import { Component, ViewChild, ElementRef } from '@angular/core';

import { ProductsService } from '../core/productListComponent/productService';
import { CartService } from '../core/productListComponent/cartService';
import { Product } from '../core/productListComponent/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // почему такой подход выбран для регистрации сервисов?
  providers:  [ ProductsService, CartService ]
})
export class AppComponent {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerHTML = 'Shop';
  }
}
