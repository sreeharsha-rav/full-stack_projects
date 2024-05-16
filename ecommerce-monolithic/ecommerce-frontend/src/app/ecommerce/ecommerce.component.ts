import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [
    ProductsComponent
  ],
  template: `
    <div class="row">
      <div class="col-md-9">
        <app-products></app-products>
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
