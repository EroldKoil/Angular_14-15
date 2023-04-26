import { productsListMock } from './productServices.mock';

export class ProductsService {
  getProducts(){
    return productsListMock
  }
}