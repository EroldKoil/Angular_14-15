import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator';

export const generatedString = new InjectionToken<string>('generatedString');

export function GeneratorFactory(n: number) {
  return function(generatorService: GeneratorService){
    return generatorService.generate(n);
  }
}
