import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-payment-information-item',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardTitle
    ],
  templateUrl: './payment-information-item.component.html',
  styleUrl: './payment-information-item.component.css'
})
export class PaymentInformationItemComponent {

}
