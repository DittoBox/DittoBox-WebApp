import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-language-dialog',
  standalone: true,
  imports: [
    TranslateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    CommonModule,
    MatRadioModule
  ],
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.css']
})
export class LanguageDialogComponent {
  loading = false;
  selectedLanguage: string;

  constructor(
    public dialogRef: MatDialogRef<LanguageDialogComponent>,
    private translate: TranslateService
  ) {
    this.selectedLanguage = this.translate.currentLang || 'en';
  }

  changeLanguage(lang: string) {
    this.loading = true;
    this.translate.use(lang).subscribe(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}