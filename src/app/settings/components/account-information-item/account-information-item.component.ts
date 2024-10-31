import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-account-information-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './account-information-item.component.html',
  styleUrl: './account-information-item.component.css'
})
export class AccountInformationItemComponent {

}
