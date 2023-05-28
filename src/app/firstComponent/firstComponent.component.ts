import { Component, Optional, Inject } from '@angular/core';
import { CartService } from 'src/core/services/cartService';
import { ConfigOptionsService } from 'src/core/services/config-options.service';
import { ConstantsService, constntsService } from 'src/core/services/constant.service';
import { LocalStorageService, localStorageService } from 'src/core/services/local-storage.service';
import { GeneratorService } from 'src/core/services/generator';
import { GeneratorFactory, generatedString } from 'src/core/services/generator.factory';

enum Categories {
  book,
  pensil,
  pen
}

@Component({
  selector: 'shop-firstComponent',
  templateUrl: './firstComponent.component.html',
  styleUrls: ['./firstComponent.component.less'],
  providers: [
    { provide: ConstantsService, useValue: constntsService },
    { provide: LocalStorageService, useValue: localStorageService },
    { provide: generatedString, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
    CartService,
    GeneratorService,
    ConfigOptionsService,
  ]
})

export class FirstComponent {
  constructor(
    @Optional() private constantsService: ConstantsService,
    @Optional() private cartService: CartService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(generatedString) public generatedString: string
  ) {}

  name: string = 'FirstComponent';
  description: string = 'This is just first component';
  price: number = 9;
  category: Categories = Categories.book;
  isAvailable: boolean = true;
}
