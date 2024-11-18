import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackbarErrorWrongParametresComponent
} from "../snackbar-error-wrong-parametres/snackbar-error-wrong-parametres.component";
import {SnackbarCorrectParametresComponent} from "../snackbar-correct-parametres/snackbar-correct-parametres.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  showMessageError(message: string) {
    this.snackBar.openFromComponent(SnackbarErrorWrongParametresComponent, {
      data: message,
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-pastel-red'],
    });
  }

  showMessageCorrect(message: string) {
    this.snackBar.openFromComponent(SnackbarCorrectParametresComponent, {
      data: message,
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-pastel-red'],
    });
  }
}


