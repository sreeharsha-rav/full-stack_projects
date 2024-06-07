import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../user.service';
import { UserRequest } from '../user.model';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule
  ],
  template: `
    <div>
      <h3 mat-dialog-title>Add User</h3>
      <mat-dialog-content>
        <p>Name</p>
        <mat-form-field appearance="outline">
          <input matInput [formControl]="nameControl" placeholder="Name">
        </mat-form-field>
        <p>Email</p>
        <mat-form-field appearance="outline">
          <input matInput [formControl]="emailControl" placeholder="Email">
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-raised-button color="primary" (click)="save()">Save</button>
        <button mat-raised-button color="warn" (click)="cancel()">Cancel</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: `
    mat-dialog-actions {
      display: flex;
      justify-content: flex-end;
    }
  `
})
export class AddUserDialogComponent {

  nameControl = new FormControl('');
  emailControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    private userService: UserService
  ) {}

  save() {
    if (this.nameControl.value && this.emailControl.value) {
      const newUser: UserRequest = {
        name: this.nameControl.value,
        email: this.emailControl.value
      };
      
      this.userService.createUser(newUser).subscribe((data) => {
        console.log(data);
        this.dialogRef.close();
      });
    } else {
      alert('Please fill out all fields');
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
