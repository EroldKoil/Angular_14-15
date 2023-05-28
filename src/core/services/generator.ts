import {Injectable} from '@angular/core';
import { genID } from './gen-id.generator';

@Injectable({providedIn: 'root'})
export class GeneratorService {
  idGenerator;

  constructor(){
    this.idGenerator = genID();
  }

  generate(n: number): string {
    const charactersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * charactersArray.length);
      result += charactersArray.charAt(randomIndex);
    }

    return result;
  }

  getNewID(): number {
    return +this.idGenerator.next().value;
  }
}