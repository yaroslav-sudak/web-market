import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})

export class BannerComponent {
  parentFunction = () => {
    console.log('clicked');
  }
}
