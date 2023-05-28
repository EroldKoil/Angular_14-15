import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/services/products.interface';
import { ProductsService } from 'src/core/services/productService';
import { CartService } from '../../core/services/cartService';
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
    this.cartService.addProduct(product)
  }
}
