import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {FacilityDetailsComponent} from "../facility-details/facility-details.component";
import {FacilityServiceService} from "../../service/facility-service.service";

@Component({
  selector: 'app-facility-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatIconModule,
  ],
  templateUrl: './facility-items.component.html',
  styleUrl: './facility-items.component.css'
})
export class FacilityItemsComponent {
  @Input() containerItems: any[] = [];

  constructor(private sidenavComponent: FacilityDetailsComponent, private containerServiceService: FacilityServiceService) { }

  openContainerSidenav(containerId: number) {
    this.sidenavComponent.loadContainer(containerId);
  }
}
