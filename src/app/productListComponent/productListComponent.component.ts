import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/productListComponent/products.interface';
@Component({
  selector: 'shop-productListComponent',
  templateUrl: './productListComponent.component.html',
  styleUrls: ['./productListComponent.component.less']
})

export class ProductListComponent {
  @Input() products!: Product[];
  @Output() buttonClick = new EventEmitter<Product>();
}
