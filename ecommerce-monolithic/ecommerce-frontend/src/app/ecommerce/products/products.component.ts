import { Component, inject } from '@angular/core';
import { Product } from './model/product.model';
import { ProductService } from './service/product.service';
import { Cart } from '../shopping-cart/model/cart.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styles: `
    .product-count {
      background-color: #f8f9fa;
      border: 1px solid #ced4da;
      color: #000000;
      border-radius: 5px;
      padding: 10px;
      display: inline-block;
      text-align: center;
    }
  `
})
export class ProductsComponent {
  products: Product[];

  private productService = inject(ProductService);

  constructor(private cart: Cart) {
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

  addToCart(product: Product) {
    console.log('Product added to cart', product);
    this.cart.addProduct(product);
  }

  removeFromCart(product: Product) {
    console.log('Product removed from cart', product);
    this.cart.removeProduct(product);
  }

  currentQuantity(product: Product): number {
    const item = this.cart.items.find((item) => item.product.id === product.id);
    return item ? item.quantity : 0;
  }

  reset() {
    this.products = [];
    this.loadProducts();
  }

}
