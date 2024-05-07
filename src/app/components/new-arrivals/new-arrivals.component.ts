import { Component, Input } from '@angular/core';
import { IProductListItem } from '../../interfaces/product-list-item.interface';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss',
})
export class NewArrivalsComponent {
  @Input() products: IProductListItem[] = [];
  @Input() gridSize: number = 4;
}
