import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {Facility} from "../../../facilities/model/facility-model/facility.model";
import {FacilityServiceService} from "../../../facilities/service/facility-service.service";

@Component({
  selector: 'app-worker-items',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
  ],
  templateUrl: './worker-items.component.html',
  styleUrl: './worker-items.component.css'
})
export class WorkerItemsComponent implements OnInit{
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
