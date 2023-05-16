import {Injectable} from '@angular/core';

import { productsListMock } from './productService.mock';

@Injectable({providedIn: 'root'})
export class ProductsService {
  getProducts(){
    return productsListMock
  }
}