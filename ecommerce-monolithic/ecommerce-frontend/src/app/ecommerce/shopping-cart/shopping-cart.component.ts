import { Component } from '@angular/core';
import { Cart } from './model/cart.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  template: `
    <!-- Shopping cart content -->
    <div class="card text-white bg-danger mb-3 mt-5">
      <div class="card-header text-center">Shopping Cart</div>
      <div class="card-body">
        <h5 class="card-title">Total: $</h5>
        <hr>
        <h6 class="card-title">Items:</h6>
        <ul class="list-group">
          <!-- TODO: Shopping cart items -->
        </ul>
        <hr>
        <div class="checkout">
          <!-- TODO: Method to place order -->
          <button class="btn btn-light btn-block flex-grow-1">Checkout</button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .checkout {
      display: flex;
      justify-content: center;
      }
    `
})
export class ShoppingCartComponent {

  constructor(private cart: Cart) {}

  ngOnInit() {
  }

  reset() {
    console.log('Reset shopping cart');
  }

}
