import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User, UserRequest } from '../../user.model';
import { UserService } from '../../user.service';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-user-dialog',
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
      <h3 mat-dialog-title>Edit User</h3>
      <mat-dialog-content>
        <p>Id: {{data.id}}</p>
        <p>Edit Name</p>
        <mat-form-field>
          <input matInput [formControl]="nameControl" placeholder="Name">
        </mat-form-field>
        <p>Edit Email</p>
        <mat-form-field>
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
export class EditUserDialogComponent {
  nameControl = new FormControl(this.data.name);
  emailControl = new FormControl(this.data.email);

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService
  ) {}

  save() {
    if (this.nameControl.value) {
      this.data.name = this.nameControl.value;
    }
    if (this.emailControl.value) {
      this.data.email = this.emailControl.value;
    }

    const userRequest: UserRequest = {
      name: this.data.name,
      email: this.data.email
    };
    const id = this.data.id;

    this.userService.updateUser(id, userRequest, {responseType: 'text'}).subscribe((data) => {
      console.log(data);
    });
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }

}
