import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatDividerModule,
    MatButtonModule,
    UserListComponent
  ],
  template: `
    <div class="create-user">
      <button mat-raised-button>Add User</button>
    </div>
    <div class="user-list">
      <app-user-list></app-user-list>
    </div>
  `,
  styles: `
    .create-user {
      display: flex;
      justify-content: flex-end;
      margin-right: 16px;
      padding: 16px 16px 0 0;
    }
    .user-list {
      padding: 16px;
      margin: 0 16px 16px 16px;
    }
  `
})
export class UserComponent {

}
