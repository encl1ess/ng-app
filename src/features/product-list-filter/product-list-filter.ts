import { Component, inject } from '@angular/core';
import { ProductService } from '../../entities/product/model/product.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { startWith, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'product-list-filter',
  imports: [ReactiveFormsModule, AsyncPipe, TitleCasePipe],
  templateUrl: './product-list-filter.html',
  styleUrl: './product-list-filter.scss',
})
export class ProductListFilter {
  productsService = inject(ProductService);

  fb = inject(FormBuilder);

  categories$ = this.productsService.getCategories();

  filterForm = this.fb.group({
    category: [''],
  });

  constructor() {
    this.filterForm.valueChanges
      .pipe(
        startWith({ category: '' }),
        switchMap((formValue) => {
          return this.productsService.getProducts(formValue.category ?? '');
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }
}
