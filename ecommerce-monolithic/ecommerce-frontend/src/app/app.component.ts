import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  template: `
    <app-navbar></app-navbar>
    <div class="container pt-2 pb-5">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ecommerce-frontend';
}
