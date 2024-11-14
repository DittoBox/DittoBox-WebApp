import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-add-container-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    ReactiveFormsModule
  ],
  templateUrl: './add-container-dialog.component.html',
  styleUrl: './add-container-dialog.component.css'
})
export class AddContainerDialogComponent {

  containerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddContainerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.containerForm = this.fb.group({
      containerId: ['', Validators.required],
      accountId: [data.accountId, Validators.required], // Obtiene el accountId del *facility*
      code: ['', Validators.required]
    });
  }

  onSave() {
    if (this.containerForm.valid) {
      this.dialogRef.close(this.containerForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
