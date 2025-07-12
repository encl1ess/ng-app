import { Component, inject } from '@angular/core';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import { ProductService } from '../../entities/product/model/product.service';

@Component({
  selector: 'product-list-component',
  imports: [ProductCard],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {
  productService = inject(ProductService);
  products = this.productService.products;

  constructor() {
    this.productService.getProducts().subscribe();
  }
}
