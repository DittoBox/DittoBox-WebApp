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
  allContainers: Facility[] = [];
  activeContainers: Facility[] = [];

  constructor(private containerService: FacilityServiceService) {}

  ngOnInit() {
    this.loadContainers();
  }

  loadContainers() {
    this.containerService.getFacilities().subscribe((data: Facility[]) => {
      this.allContainers = data;
      this.activeContainers = data.filter(facility => facility.status === 'Active');
    });
  }
}
