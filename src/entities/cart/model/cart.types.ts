import { Product } from '../../product/model/product.types';

export interface StoreCartItem {
  id: number;
  date: string;
  quantity: number;
}

export type CartItem = Pick<Product, 'title' | 'image'> &
  StoreCartItem & {
    total_price: number;
  };
