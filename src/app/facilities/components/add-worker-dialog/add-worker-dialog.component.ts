import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions
} from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-add-worker-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatLabel
  ],
  templateUrl: './add-worker-dialog.component.html',
  styleUrls: ['./add-worker-dialog.component.css']
})
export class AddWorkerDialogComponent {
  workerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddWorkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.workerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      accountId: [data.accountId, Validators.required],
    });
  }

  onSave() {
    if (this.workerForm.valid) {
      this.dialogRef.close(this.workerForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
