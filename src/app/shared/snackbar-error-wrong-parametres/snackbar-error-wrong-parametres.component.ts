import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-error-wrong-parametres',
  standalone: true,

  imports: [],
  templateUrl: './snackbar-error-wrong-parametres.component.html',
  styleUrl: './snackbar-error-wrong-parametres.component.css'
})
export class SnackbarErrorWrongParametresComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
