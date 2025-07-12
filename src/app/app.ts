import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from '../features/product-list-component/product-list-component';
import { Button } from '../shared/ui/button/button';
import { CartList } from '../features/cart-list/cart-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, Button, CartList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ng-app';
  isCartOpen = false;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
