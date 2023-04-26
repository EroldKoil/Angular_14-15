import { Component } from '@angular/core';

@Component({
  selector: 'shop-firstComponent',
  templateUrl: './firstComponent.component.html',
  styleUrls: ['./firstComponent.component.less']
})

enum Categories {
  book,
  pensil,
  pen
}

export class FirstComponent {
  name: string = 'FirstComponent';
  description: string = 'This is just first component';
  price: number = 9;
  category: Categories = Categories.book;
  isAvailable: boolean = true;
}
