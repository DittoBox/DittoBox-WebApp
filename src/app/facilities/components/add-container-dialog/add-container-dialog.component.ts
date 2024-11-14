import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-add-container-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './add-container-dialog.component.html',
  styleUrl: './add-container-dialog.component.css'
})
export class AddContainerDialogComponent {

}
