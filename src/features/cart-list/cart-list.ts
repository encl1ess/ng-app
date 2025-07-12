import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../entities/cart/model/cart.service';
import { ProductService } from '../../entities/product/model/product.service';
import { Product } from '../../entities/product/model/product.types';
import { CartItem } from '../../entities/cart/model/cart.types';
import { CartCard } from '../../entities/cart/ui/cart-card/cart-card';

@Component({
  selector: 'cart-list',
  imports: [CartCard],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss',
})
export class CartList {
  cartService = inject(CartService);
  productService = inject(ProductService);

  storedCart = this.cartService.storedCart;
  productsMap: Map<number, Product>;

  totalPrice: number = 0;

  cartItems = computed(() => {
    this.totalPrice = 0;

    return this.storedCart().map((item) => {
      const product = this.productsMap.get(item.id);

      const { title, image } = product || {};
      const total_price = product ? product.price * item.quantity : 0;

      this.totalPrice += Number(total_price);

      return {
        ...item,
        title,
        total_price,
        image,
      } as CartItem;
    });
  });

  constructor() {
    this.productsMap = new Map(
      this.productService.products().map((p) => [p.id, p]),
    );
  }
}
