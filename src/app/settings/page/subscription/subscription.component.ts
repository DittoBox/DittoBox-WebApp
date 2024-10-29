import { Component } from '@angular/core';
import {CurrentTierItemComponent} from "../../components/current-tier-item/current-tier-item.component";
import {
  PaymentInformationItemComponent
} from "../../components/payment-information-item/payment-information-item.component";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    CurrentTierItemComponent,
    PaymentInformationItemComponent
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

}
