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
  totalPrice: number;
  totalQuantity: number;
  products: CartProducts;
}