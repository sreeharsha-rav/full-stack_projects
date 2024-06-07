import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">
        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let row">{{row.name}}</td>
        </ng-container>

        <!-- Email Column -->
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef>Email</th>
          <td mat-cell *matCellDef="let row">{{row.email}}</td>
        </ng-container>

        <!-- Actions -->
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Actions</th>
          <td mat-cell *matCellDef="let row">
            <button mat-button color="primary">Edit</button>
            <button mat-button color="warn">Delete</button>
          </td>
        </ng-container>
    
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
    
  `,
  styles: `
    .mat-header-cell, .mat-cell {
      flex: 1 0 0px;
    }
  `,
  standalone: true,
  imports: [MatTableModule, MatButtonModule]
})
export class UserTableComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Fetch all users
    this.userService.getAllUsers().subscribe((data) => {
      this.dataSource = data.users;
    });
  }

}
