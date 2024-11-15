import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-account-information-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    TranslateModule
  ],
  templateUrl: './account-information-item.component.html',
  styleUrl: './account-information-item.component.css'
})
export class AccountInformationItemComponent {

  @Input() validator!: boolean;

  constructor() {
  }

}
