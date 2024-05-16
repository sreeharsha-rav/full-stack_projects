import { Component, inject } from '@angular/core';
import { Product } from './model/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent {
  products: Product[];

  private productService = inject(ProductService);

  constructor() {
    this.products = [];
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
