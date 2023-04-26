import { Product } from './products.interface';

export class CartService {
  products: Product[] = [];

  getProducts(): Product[]{
    return this.products;
  }

  addToCart(product: Product): void{
    this.products.push(product);
  }

  removeProduct(product: Product): Product[]{
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    return this.products;
  }
}