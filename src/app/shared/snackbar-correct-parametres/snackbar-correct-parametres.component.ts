import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar-correct-parametres',
  standalone: true,
  imports: [],
  templateUrl: './snackbar-correct-parametres.component.html',
  styleUrl: './snackbar-correct-parametres.component.css'
})
export class SnackbarCorrectParametresComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

}
