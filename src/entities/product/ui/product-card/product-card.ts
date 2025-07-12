import { Component, input } from '@angular/core';
import { Thumbnail } from '../../../../shared/ui/thumbnail/thumbnail';
import { Title } from '../../../../shared/ui/title/title';
import { Product } from '../../model/product.types';

@Component({
  selector: 'product-card',
  imports: [Thumbnail, Title],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input<Product>();
}
