import { Pipe, type PipeTransform } from '@angular/core';
import { CartProduct } from 'src/core/services/products.interface';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {
  transform(objects: CartProduct[] | null, config: string[], isAsc: boolean): CartProduct[] {
    if(!objects){
      return [];
    }
    let keyId = 0;
    const sort = (a: any, b: any): number => {
      if(a[config[keyId]] > b[config[keyId]]) {
        keyId = 0;
        return isAsc? 1: -1;
      } else if (a[config[keyId]] < b[config[keyId]]) {
        keyId = 0;
        return  isAsc? -1: 1;
      } else {
        if(keyId >= config.length){
          keyId = 0;
          return 0;
        } else {
          keyId += 1;
          return sort(a, b);
        }
      }
    }
    
    return objects.sort(sort);
  }
}