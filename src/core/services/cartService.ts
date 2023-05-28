import {Injectable} from '@angular/core';

import { CartProduct, Product, Cart, CartProducts } from './products.interface';

@Injectable({providedIn: 'root'})
export class CartService {
  private cartProducts: Cart = {
    totalCost: 0,
    totalQuantity: 0,
    products: {}
  }

  private changeQuantity(product: CartProduct, count: number): void {
    this.cartProducts.products[product.id] = {
      ...this.cartProducts.products[product.id],
      count
    }
  }

  getCart(): Cart {
    return this.cartProducts;
  }

  getProducts(): CartProducts{
    return this.cartProducts.products;
  }

  addProduct(product: Product): void {
    if(this.cartProducts.products[product.id]){
      this.cartProducts.products[product.id].count ++;
    } else {
      this.cartProducts.products[product.id] = {...product, count: 1};
    }
    this.cartProducts.totalCost += product.price;
    this.cartProducts.totalQuantity ++;
  } 

  increaseQuantity(product: CartProduct): void {
    this.changeQuantity(product, product.count + 1);
  }

  decreaseQuantity(product: CartProduct): void {
    if(!this.cartProducts.products[product.id]){
      return;
    }

    if(product.count > 1){
      this.changeQuantity(product, product.count - 1);
      this.cartProducts.totalCost -= product.price;
      this.cartProducts.totalQuantity --;
      this.checkLowerToZero();
    } else {
      this.removeProduct(product);
    }
  }

  getTotalCost(): number{
    return this.cartProducts.totalCost;
  }
  
  getTotalQuantity(): number{
    return this.cartProducts.totalQuantity;
  }

  removeProduct(product: CartProduct): void {
    if(!this.cartProducts.products[product.id]){
     return;
    }

    this.cartProducts.totalCost -= product.count * product.price;
    this.cartProducts.totalQuantity -= product.count;

    const updatedProductList: CartProducts = {};
    Object.keys(this.cartProducts.products).forEach((key) => {
      if(product.id !== +key){
        updatedProductList[+key] = this.cartProducts.products[+key];
      }
    });

    this.cartProducts.products = updatedProductList;
    this.checkLowerToZero();
  }

  checkLowerToZero(){
    this.cartProducts.totalCost = this.cartProducts.totalCost >= 0 ? this.cartProducts.totalCost : 0;
    this.cartProducts.totalQuantity = this.cartProducts.totalQuantity >= 0 ? this.cartProducts.totalQuantity : 0;
  }

  removeAllProducts(): void {
    this.cartProducts.products = {};
  }

  isEmptyCart(): boolean {
    return Object.keys(this.cartProducts.products).length === 0;
  }
}