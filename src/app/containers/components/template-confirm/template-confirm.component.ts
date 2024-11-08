import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-template-confirm',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogTitle,
    TranslateModule
  ],
  templateUrl: './template-confirm.component.html',
  styleUrl: './template-confirm.component.css'
})
export class TemplateConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<TemplateConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
