import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/productListComponent/products.interface';

@Component({
  selector: 'shop-cartListComponent',
  templateUrl: './cartListComponent.component.html',
  styleUrls: ['./cartListComponent.component.less']
})

export class CartListComponent {
  @Input() products!: Product[];
  @Output() buttonClick = new EventEmitter<Product>();

  trackByName(index: number, product: Product, ): number {
    return product.id;
  }

  getTotalPrice(): number{
    return this.products.reduce((price, product) => price + product.price ,0);
  }
}
