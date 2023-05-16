import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../core/productListComponent/products.interface'

@Component({
  selector: 'shop-productComponent',
  templateUrl: './productComponent.component.html',
  styleUrls: ['./productComponent.component.less']
})

export class ProductComponent {
  @Input() product!: Product;
  @Input() textButton!: string;
  @Input() isCartProduct!: boolean;
  @Output() buyProduct = new EventEmitter<Product>();
}
