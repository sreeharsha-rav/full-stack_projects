import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Cart } from './shopping-cart/model/cart.model';

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
  styles: ``,
  providers: [Cart]
})
export class EcommerceComponent {

  orderFinished = false;

  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;
  @ViewChild(ShoppingCartComponent) shoppingCartComponent!: ShoppingCartComponent;

  constructor() { }

  ngOnInit() { }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsComponent.reset();
    this.shoppingCartComponent.reset();
  }

}
