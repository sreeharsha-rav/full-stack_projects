import { Component, ViewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { UserTableComponent } from './user-table/user-table.component';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatDividerModule,
    MatButtonModule,
    UserTableComponent,
    AddUserDialogComponent
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

  constructor(private addDialog: MatDialog) {}

  @ViewChild(UserTableComponent) userTable!: UserTableComponent;  // Reference to the user table component

  openAddUserDialog() {
    const dialogRef = this.addDialog.open(AddUserDialogComponent);

    // Update the table after the dialog closes
    dialogRef.afterClosed().subscribe(result => {
      this.userTable.getUserData();
    });
  }
}
