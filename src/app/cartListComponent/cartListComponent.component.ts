import { Component } from '@angular/core';
import { CartProduct, Cart } from '../../core/productListComponent/products.interface';
import { CartService } from '../../core/productListComponent/cartService';

@Component({
  selector: 'shop-cartListComponent',
  templateUrl: './cartListComponent.component.html',
  styleUrls: ['./cartListComponent.component.less']
})

export class CartListComponent {  
  cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(){
    this.cart = this.cartService.getCart();
  }

  trackByName(index: number, product: CartProduct): number {
    return product.id;
  }

  onRemoveProduct(product: CartProduct): void {
    this.cartService.removeProduct(product);
  }

  onQuantityIncrease(product: CartProduct) {
    this.cartService.addToCart(product);
  }

  onQuantityDecrease(product: CartProduct) {
    this.cartService.quantityDecrease(product);
  }

  getProducts(): CartProduct[]{
    return Object.values(this.cart.products);
  }
}
