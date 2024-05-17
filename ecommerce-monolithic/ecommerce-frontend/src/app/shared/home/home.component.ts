import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <!-- Hero Section -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 text-center">
          <div class="jumbotron mt-5">
            <h1 class="display-4">Welcome to My E-Commerce App</h1>
            <p class="lead">This is a simple E-Commerce app built with Angular and Bootstrap.</p>
            <hr class="my-4">
            <p>This app demonstrates e-commerce features like product listing, product details, and order placement.</p>
            <a class="btn btn-primary btn-lg" href="shop" role="button">Start Shopping</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
