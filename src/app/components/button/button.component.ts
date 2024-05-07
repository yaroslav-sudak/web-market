import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() parentFunction: Function = () => { };
  @Input() isWhite: boolean = false;
  @Input() isBorder: boolean = false;

  onClick(): void {
    if (this.parentFunction) {
      this.parentFunction();
    }
  }
}