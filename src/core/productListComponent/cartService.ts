import {Injectable} from '@angular/core';

import { CartProduct, Product, Cart } from './products.interface';

@Injectable({providedIn: 'root'})
export class CartService {
  cart: Cart = {
    totalPrice: 0,
    totalQuantity: 0,
    products: {}
  }

  getCart(): Cart{
    return this.cart;
  }

  addToCart(product: Product): void{
    if(this.cart.products[product.id]){
      this.cart.products[product.id].count ++;
    } else {
      this.cart.products[product.id] = {...product, count: 1};
    }
    this.cart.totalPrice += product.price;
    this.cart.totalQuantity ++;
  }

  quantityDecrease(product: CartProduct): void{
    if(!this.cart.products[product.id]){
      return;
    }

    if(product.count > 1){
      product.count --;
      this.cart.totalPrice -= product.price;
      this.cart.totalQuantity --;
      this.checkLowerToZero();
    } else {
      this.removeProduct(product);
    }
  }

  getTotalPrice(): number{
    return this.cart.totalPrice;
  }
  
  getTotalQuantity(): number{
    return this.cart.totalQuantity;
  }

  removeProduct(product: CartProduct): void{
    if(!this.cart.products[product.id]){
     return;
    }

    this.cart.totalPrice -= product.count * product.price;
    this.cart.totalQuantity -= product.count;

    delete this.cart.products[product.id];
    this.checkLowerToZero();
  }

  checkLowerToZero(){
    this.cart.totalPrice = this.cart.totalPrice >= 0 ? this.cart.totalPrice : 0;
    this.cart.totalQuantity = this.cart.totalQuantity >= 0 ? this.cart.totalQuantity : 0;
  }
}