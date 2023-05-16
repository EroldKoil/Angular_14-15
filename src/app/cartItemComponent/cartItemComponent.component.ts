import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, OnChanges} from '@angular/core';
import { CartProduct } from '../../core/productListComponent/products.interface'

@Component({
  selector: 'shop-cartItemComponent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cartItemComponent.component.html',
  styleUrls: ['./cartItemComponent.component.less']
})

export class CartItemComponent implements OnChanges{
  @Input() product!: CartProduct;
  @Input() quantity!: number;
  @Output() removeProduct = new EventEmitter<CartProduct>();
  @Output() quantityDecrease = new EventEmitter<CartProduct>();
  @Output() quantityIncrease = new EventEmitter<CartProduct>();

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  ngOnInit() {
    console.log('this.product', this.product); 
  }
}
