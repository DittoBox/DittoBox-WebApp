import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {UserInformationItemComponent} from "../user-information-item/user-information-item.component";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-information-edit-item',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogTitle,
    FormsModule,
    MatDialogActions,
    MatButton,
    MatLabel,
  ],
  templateUrl: './user-information-edit-item.component.html',
  styleUrl: './user-information-edit-item.component.css'
})
export class UserInformationEditItemComponent {
  constructor(
    public dialogRef: MatDialogRef<UserInformationItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
