import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-current-tier-item',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardTitle
    ],
  templateUrl: './current-tier-item.component.html',
  styleUrl: './current-tier-item.component.css'
})
export class CurrentTierItemComponent {

}
