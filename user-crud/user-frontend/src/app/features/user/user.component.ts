import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { UserTableComponent } from './user-table/user-table.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatDividerModule,
    MatButtonModule,
    UserTableComponent
  ],
  template: `
    <div class="create-user">
      <button mat-raised-button color="accent" (click)="openAddUserDialog()">Add User</button>
    </div>
    <div class="user-table">
      <app-user-table></app-user-table>
    </div>
  `,
  styles: `
    .create-user {
      display: flex;
      justify-content: flex-end;
      margin-right: 16px;
      padding: 16px 16px 0 0;
    }
    .user-table {
      padding: 16px;
      margin: 0 16px 16px 16px;
    }
  `
})
export class UserComponent {

  constructor() {}

  openAddUserDialog() {
    console.log('Add User');
  }
}
