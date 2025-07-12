import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `<button
    class="app-button"
    [class.app-button--icon]="isIcon()"
    [class.app-button--dark]="isDark()"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrl: './button.scss',
})
export class Button {
  isIcon = input<boolean>(false);
  isDark = input<boolean>(false);
}
