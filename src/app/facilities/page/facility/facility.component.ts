import { Component } from '@angular/core';
import { FacilityItemsComponent } from "../../components/facility-items/facility-items.component";
import { FacilityTabComponent } from "../../components/facility-tab/facility-tab.component";
import {FacilityDetailsComponent} from "../../components/facility-details/facility-details.component";

@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [
    FacilityItemsComponent,
    FacilityTabComponent,
    FacilityDetailsComponent
  ],
  templateUrl: './facility.component.html',
  styleUrl: './facility.component.css'
})
export class FacilityComponent {

}