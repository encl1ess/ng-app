import { Component, inject, input } from '@angular/core';
import { CartService } from '../../entities/cart/model/cart.service';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'add-to-cart-button',
  imports: [Button],
  templateUrl: './add-to-cart-button.html',
  styleUrl: './add-to-cart-button.scss',
})
export class AddToCartButton {
  productId = input<number>(0);

  cartService = inject(CartService);

  storedCart = this.cartService.storedCart;

  quantity: number = 0;

  constructor() {}

  ngOnInit() {
    this.quantity = this.cartService.getQuantityById(this.productId());
  }

  onAddToCardClick() {
    this.quantity++;
    this.cartService.addToCart(this.productId());
  }

  onChangeQuantityClick(isIncrement: boolean) {
    this.cartService.updateQuantity(
      this.productId(),
      isIncrement ? ++this.quantity : --this.quantity,
    );
  }

  onRemoveFromCartClick() {
    this.quantity = 0;
    this.cartService.removeFromCart(this.productId());
  }
}
