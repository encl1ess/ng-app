import { Component, inject } from '@angular/core';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import { ProductService } from '../../entities/product/model/product.service';
import { ProductListFilter } from '../product-list-filter/product-list-filter';

@Component({
  selector: 'product-list-component',
  imports: [ProductCard, ProductListFilter],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {
  productService = inject(ProductService);
  products = this.productService.products;
}
