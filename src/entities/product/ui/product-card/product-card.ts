import { Component, input } from '@angular/core';
import { Thumbnail } from '../../../../shared/ui/thumbnail/thumbnail';
import { Title } from '../../../../shared/ui/title/title';
import { Product } from '../../model/product.types';
import { AddToCartButton } from '../../../../features/add-to-cart-button/add-to-cart-button';

@Component({
  selector: 'product-card',
  imports: [Thumbnail, Title, AddToCartButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input<Product>();
}
