import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-change-password-modal',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, FormsModule, MatButton, TranslateModule],
  templateUrl: './change-password-modal.component.html',
  styleUrl: './change-password-modal.component.css'
})
export class ChangePasswordModalComponent {

  newPassword: string = '';

  constructor(public dialogRef: MatDialogRef<ChangePasswordModalComponent>) {
  }

  onSave() {
    if (this.newPassword.trim()) {
      this.dialogRef.close(this.newPassword);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
