import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  items = ['nicolas', 'julian', 'perez'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/image01.jpg',
      title: 'Camiseta',
      price: 8000,
      description: 'una camisetota'
    },
    {
      id: '2',
      image: 'assets/images/images02.jpg',
      title: 'Pantacha',
      price: 5000,
      description: 'una pantacha'
    },
    {
      id: '3',
      image: 'assets/images/image03.jpg',
      title: 'Cucos',
      price: 1000,
      description: 'unos cucos'
    },
    {
      id: '4',
      image: 'assets/images/image04.jpg',
      title: 'Tanga',
      price: 8000,
      description: 'una tanga roja'
    }
  ];

  // tslint:disable-next-line: typedef
  addItem() {
    this.items.push('nuevo item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number){
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
}
