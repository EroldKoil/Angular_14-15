import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/productListComponent/products.interface';
import { ProductsService } from 'src/core/productListComponent/productService';
import { CartService } from '../../core/productListComponent/cartService';
@Component({
  selector: 'shop-productListComponent',
  templateUrl: './productListComponent.component.html',
  styleUrls: ['./productListComponent.component.less']
})

export class ProductListComponent {
  products!: Product[];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(){
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)
  }
}
