import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Thumbnail } from '../../../../shared/ui/thumbnail/thumbnail';
import { Title } from '../../../../shared/ui/title/title';
import { CartItem } from '../../model/cart.types';

@Component({
  selector: 'cart-card',
  imports: [Thumbnail, Title],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCard {
  item = input<CartItem>();
}
