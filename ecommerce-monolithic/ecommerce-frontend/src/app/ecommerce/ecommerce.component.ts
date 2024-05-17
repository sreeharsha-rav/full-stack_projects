import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [
    ProductsComponent,
    ShoppingCartComponent
  ],
  template: `
    <div class="row">
      <div class="col-md-9">
        <app-products></app-products>
      </div>
      <div class="col-md-3">
        <app-shopping-cart></app-shopping-cart>
      </div>
    </div>
  `,
  styles: ``
})
export class EcommerceComponent {

  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;

  constructor() { }

  ngOnInit() { }

}
