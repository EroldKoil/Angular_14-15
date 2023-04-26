import { Component } from '@angular/core';

import { ProductsService } from '../core/productListComponent/productServices';
import { CartService } from '../core/productListComponent/cartServices';
import { Product } from '../core/productListComponent/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers:  [ ProductsService, CartService ]
})
export class AppComponent {
  title = 'shop';
  productsList: Product[] = [];
  cartList: Product[] = [];

  constructor( private productsService: ProductsService, private cartService: CartService ) {}

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
    this.cartList = this.cartService.getProducts();
  }

  onAddToCart(product: Product): void {
    console.log(`add to card: ${product?.name}`);
    this.cartService.addToCart(product);
  }

  removeProduct(product: Product): void {
    console.log(`remove product: ${product?.name}`);
    this.cartService.removeProduct(product);
  }
}
