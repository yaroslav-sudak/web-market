import { Component, Input } from '@angular/core';
import { IProductListItem } from '../../interfaces/product-list-item.interface';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.scss'
})
export class TopSellingComponent {
  @Input() products: IProductListItem[] = [];
  @Input() gridSize: number = 4;
}
