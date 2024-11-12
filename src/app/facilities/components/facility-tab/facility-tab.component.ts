import {Component, OnInit, ViewChild} from '@angular/core';
import { Facility } from '../../model/facility-model/facility.model';
import { FacilityItemsComponent } from '../facility-items/facility-items.component';
import { FacilityServiceService } from '../../service/facility-service.service';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import {FacilityDetailsComponent} from "../facility-details/facility-details.component";

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  imports: [
    FacilityItemsComponent,
    MatButtonToggle,
    MatTabGroup,
    MatTab,
    FacilityDetailsComponent,
  ],
  templateUrl: './facility-tab.component.html',
  styleUrl: './facility-tab.component.css'
})
export class FacilityTabComponent implements OnInit {
  allFacilities: Facility[] = [];
  activeFacility: Facility[] = [];

  @ViewChild(FacilityDetailsComponent) facilityDetailsComponent!: FacilityDetailsComponent;

  constructor(private facilityService: FacilityServiceService) {}

  ngOnInit() {
    this.loadFacilities();
  }

  loadFacilities() {
    this.facilityService.getFacilityById("1").subscribe((data: Facility) => {
      this.allFacilities = [data];
      this.activeFacility = this.allFacilities.filter(facility => facility.status === 'Active');
    });
  }

  showFacilityDetails(facilityId: number) {
    this.facilityDetailsComponent.loadFacility(facilityId);
  }

}
