export interface Product {
  id: number,
  price: number;
  name: string;
  isAvailable: boolean;
}

export interface CartProduct extends Product {
  count: number;
}

export type CartProducts = {[id: number]: CartProduct}

export interface Cart {
  totalCost: number;
  totalQuantity: number;
  products: CartProducts;
}

export interface ConfigModel {
  id?: string;
  login?: string;
  email?: string;
}