import { Component, Input } from '@angular/core';
import { IProductListItem } from '../../interfaces/product-list-item.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: IProductListItem[] = [];
  @Input() gridSize: number = 4;
}
