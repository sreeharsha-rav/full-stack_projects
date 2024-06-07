import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
  ],
  template: `
    <mat-toolbar>
      <span>User CRUD</span>
    </mat-toolbar>
  `,
  styles: `
    mat-toolbar {
      background-color: #1976d2;
      color: white;
      font-size: 24px;
      font-weight: 500;
      padding: 16px;
    }
    `
})
export class NavbarComponent {

}
