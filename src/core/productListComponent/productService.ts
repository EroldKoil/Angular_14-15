import {Injectable} from '@angular/core';

import { productsListMock } from './productService.mock';

@Injectable({providedIn: 'root'})
export class ProductsService {
  getProducts(){
    return productsListMock
  }
}
// Почему вы вынесли папки core, shared за пределы app?
