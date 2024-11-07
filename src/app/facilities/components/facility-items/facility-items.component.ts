import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {FacilityDetailsComponent} from "../facility-details/facility-details.component";
import {FacilityServiceService} from "../../service/facility-service.service";
import {MatButton} from "@angular/material/button";
import {MatButtonToggle} from "@angular/material/button-toggle";

@Component({
  selector: 'app-facility-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatIconModule,
    MatButton,
    MatButtonToggle,
  ],
  templateUrl: './facility-items.component.html',
  styleUrl: './facility-items.component.css'
})
export class FacilityItemsComponent {
  @Input() facilityItems: any[] = [];

  constructor(private sidenavComponent: FacilityDetailsComponent, private facilityServiceService: FacilityServiceService) { }

  openFacilitySidenav(facilityId: number) {
    this.sidenavComponent.loadFacility(facilityId);
  }
}
