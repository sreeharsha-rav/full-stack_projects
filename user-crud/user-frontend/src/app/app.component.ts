import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserComponent } from './features/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    UserComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <div>
      <app-user></app-user>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'user-frontend';
}
