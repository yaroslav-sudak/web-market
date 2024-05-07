import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss',
})
export class PromotionComponent {
  @ViewChild('promotion') promotion?: ElementRef;

  onClick() {
    if (this.promotion) {
      this.promotion.nativeElement.classList.add('hidden');
      setTimeout(() => {
        this.promotion?.nativeElement.remove();
      }, 500);
    }
  }
}
