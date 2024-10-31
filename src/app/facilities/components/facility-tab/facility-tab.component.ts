import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {Facility} from "../../model/facility-model/facility.model";
import {FacilityItemsComponent} from "../facility-items/facility-items.component";
import {FacilityServiceService} from "../../service/facility-service.service";

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    FacilityItemsComponent,
  ],
  templateUrl: './facility-tab.component.html',
  styleUrl: './facility-tab.component.css'
})
export class FacilityTabComponent implements  OnInit {
  allFacilities: Facility[] = [];
  activeFacility: Facility[] = [];

  constructor(private facilityService: FacilityServiceService) {}

  ngOnInit() {
    this.loadFacilities();
  }

  loadFacilities() {
    this.facilityService.getFacilities().subscribe((data: Facility[]) => {
      this.allFacilities = data;
      this.activeFacility = data.filter(facility => facility.status === 'Active');
    });
  }
}
