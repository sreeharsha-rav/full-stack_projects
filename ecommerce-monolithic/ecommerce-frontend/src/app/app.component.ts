import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    EcommerceComponent,
    RouterOutlet
  ],
  template: `
    <app-navbar></app-navbar>
    <div class="container mt-2">
      <app-ecommerce></app-ecommerce>
    </div>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ecommerce-frontend';
}
