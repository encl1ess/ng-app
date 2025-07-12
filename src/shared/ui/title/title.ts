import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `<p class="title"><ng-content></ng-content></p>`,
  styleUrl: './title.scss'
})
export class Title {

}
