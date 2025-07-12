import { Injectable, signal } from '@angular/core';
import { StoreCartItem } from './cart.types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storedCart = signal<StoreCartItem[]>([]);

  getStoredCart() {
    const item = localStorage.getItem('cart');
    return this.storedCart.set(item ? JSON.parse(item) : []);
  }

  getQuantityById(id: number) {
    return this.storedCart().find((cart) => cart.id === id)?.quantity ?? 0;
  }

  addToCart(id: number) {
    const item = {
      id,
      date: new Date().toISOString(),
      quantity: 1,
    };

    this.storedCart.update((currentCart) => [...currentCart, item]);
    localStorage.setItem('cart', JSON.stringify(this.storedCart()));
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }

    this.storedCart.update((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );

    localStorage.setItem('cart', JSON.stringify(this.storedCart()));
  }

  removeFromCart(id: number) {
    this.storedCart.update((currentCart) =>
      currentCart.filter((item) => item.id !== id),
    );

    this.storedCart().length
      ? localStorage.setItem('cart', JSON.stringify(this.storedCart()))
      : localStorage.removeItem('cart');
  }
}
