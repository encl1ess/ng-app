import { inject, Injectable, signal } from '@angular/core';
import { ConfigService } from '../../../shared/api/config.service';
import { ProductList } from './product.types';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private config = inject(ConfigService);

  products = signal<ProductList>([]);

  getProducts(category?: string): Observable<ProductList> {
    return this.config
      .get<ProductList>(category ? `products/category/${category}` : 'products')
      .pipe(tap((products) => this.products.set(products)));
  }

  getCategories(): Observable<string[]> {
    return this.config.get<string[]>('products/categories');
  }
}
