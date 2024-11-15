import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatDialog} from "@angular/material/dialog";
import {UserInformationEditItemComponent} from "../user-information-edit-item/user-information-edit-item.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-information-item',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardTitle,
        TranslateModule
    ],
  templateUrl: './user-information-item.component.html',
  styleUrl: './user-information-item.component.css'
})
export class UserInformationItemComponent {
  constructor(private dialog: MatDialog) {}

  openEditDialog() {
    const dialogRef = this.dialog.open(UserInformationEditItemComponent, {
      data: {
        username: 'A warm place',
        name: 'Advance',
        idNumber: '20124578963',
        bankOwner: 'Sofía Pérez'
      },
      position: { right: '0' },
      panelClass: 'custom-dialog-container'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with data:', result);
      }
    });
  }

}
