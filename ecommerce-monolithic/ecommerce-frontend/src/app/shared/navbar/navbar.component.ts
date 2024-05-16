import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <h4 class="navbar-brand">E-Commerce</h4>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="orders">Orders</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: ``
})
export class NavbarComponent {

}
