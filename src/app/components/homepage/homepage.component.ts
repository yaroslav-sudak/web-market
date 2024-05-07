import { Component, HostListener } from '@angular/core';
import { IProductListItem } from '../../interfaces/product-list-item.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  newArrivalsList: IProductListItem[] = [
    {
      imagePath: '/assets/images/products/product-1.png',
      name: 'T-shirt with Tape Details',
      rateMaximum: 5,
      price: 120,
      rate: 4.5,
    },
    {
      imagePath: '/assets/images/products/product-2.png',
      name: 'Skinny Fit Jeans',
      rateMaximum: 5,
      discount: 20,
      price: 260,
      rate: 3.5,
    },
    {
      imagePath: '/assets/images/products/product-3.png',
      name: 'Checkered Shirt',
      rateMaximum: 5,
      price: 180,
      rate: 4.5,
    },
    {
      imagePath: '/assets/images/products/product-4.png',
      name: 'Sleeve Striped T-shirt',
      rateMaximum: 5,
      discount: 30,
      price: 160,
      rate: 4.5,
    },
  ];

  topSellingList: IProductListItem[] = [
    {
      imagePath: '/assets/images/products/product-5.png',
      name: 'Vertical Striped Shirt',
      rateMaximum: 5,
      discount: 20,
      price: 232,
      rate: 5,
    },
    {
      imagePath: '/assets/images/products/product-6.png',
      name: 'Courage Graphic T-shirt',
      rateMaximum: 5,
      price: 145,
      rate: 4,
    },
    {
      imagePath: '/assets/images/products/product-7.png',
      name: 'Loose Fit Bermuda Shorts',
      rateMaximum: 5,
      price: 80,
      rate: 3,
    },
    {
      imagePath: '/assets/images/products/product-8.png',
      name: 'Faded Skinny Jeans',
      rateMaximum: 5,
      price: 210,
      rate: 4.5,
    },
  ];

  gridSize: number = 4;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 782) {
      this.gridSize = 2;
    } else if (event.target.innerWidth < 1242) {
      this.gridSize = 3;
    } else {
      this.gridSize = 4;
    }
  }
}
