import { Component } from '@angular/core';
import { CartProduct } from '../../core/services/products.interface';
import { CartService } from '../../core/services/cartService';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { ConstantsService, constntsService } from 'src/core/services/constant.service';

@Component({
  selector: 'shop-cartListComponent',
  templateUrl: './cartListComponent.component.html',
  styleUrls: ['./cartListComponent.component.less'],
  providers: [
    { provide: ConstantsService, useValue: constntsService }
  ]
})

export class CartListComponent {  
  totalCost: number = 0;
  totalQuantity: number = 0;
  sortOptions: any;

  constructor(
    private cartService: CartService, 
    private constantsService: ConstantsService
    ) {}

  ngOnInit(){
    this.totalCost = this.cartService.getTotalCost();
    this.totalQuantity = this.cartService.getTotalQuantity(); 
    this.sortOptions = this.constantsService.sortOptions;
  }

  trackByName(index: number, product: CartProduct): number {
    return product.id;
  }

  onRemoveProduct(product: CartProduct): void {
    this.cartService.removeProduct(product);
  }

  onQuantityIncrease(product: CartProduct) {
    this.cartService.increaseQuantity(product);
  }

  onQuantityDecrease(product: CartProduct) {
    this.cartService.decreaseQuantity(product);
  }

  getProducts(): Observable<CartProduct[]>{
    return this.cartService.getProducts();
  }

  isEmpty(): boolean {
    return this.cartService.isEmptyCart();
  }

  compareFunction(a: KeyValue<string, CartProduct>, b: KeyValue<string, CartProduct>) {
    if(a.key > b.key) {
      return 1;
    }
    return -1;
  }

  onChangeSortOption(event: any) {
    this.sortOptions.selectedSort = event.target?.value;
  }

  onChangeSortAsc(event: any) {
    this.sortOptions.isAsc = event.target?.checked;
  }
}
