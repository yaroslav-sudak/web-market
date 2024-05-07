import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})

export class PriceComponent {
  @Input() fontSize: number = 24;
  @Input() spaceSize: number = 12;
  @Input() discount: number = 0;
  @Input() price: number = 0;
}
