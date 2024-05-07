import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss'
})
export class RateComponent {
  @Input() fontSize: number = 16;
  @Input() rate: number = 2;
  // If maximum is given, the component will render number of stars out of maximum
  @Input() maximum: number = 0;

  fakeArray: number[] = [];
  Math = Math;

  ngAfterContentInit() {
    this.fakeArray = new Array(Math.floor(this.rate));
  }
}
