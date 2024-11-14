// facility-tab.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { FacilityServiceService } from '../../service/facility-service.service';
import { Facility } from '../../model/facility-model/facility.model';
import { FacilityDetailsComponent } from '../facility-details/facility-details.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {FacilityCreateComponent} from "../facility-create/facility-create.component";
import {FacilityItemsComponent} from "../facility-items/facility-items.component";
import {CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  templateUrl: './facility-tab.component.html',
  imports: [
    FacilityDetailsComponent,
    MatTabGroup,
    MatTab,
    MatButtonToggle,
    FacilityCreateComponent,
    FacilityItemsComponent,
    CommonModule
  ],
  styleUrl: './facility-tab.component.css'
})
export class FacilityTabComponent implements OnInit {
  allFacilities: Facility[] = [];
  isCreatingFacility: boolean = false;

  @ViewChild(FacilityDetailsComponent) facilityDetailsComponent!: FacilityDetailsComponent;

  constructor(private facilityService: FacilityServiceService) {}

  ngOnInit() {
    this.loadFacilities();
  }

  loadFacilities() {
    const accountId = localStorage.getItem('accountId');
    if (accountId) {
      this.facilityService.getGroupsByAccount(accountId).subscribe((data: Facility[]) => {
        this.allFacilities = data;
      });
    }
  }

  toggleCreateFacility() {
    this.isCreatingFacility = !this.isCreatingFacility;
  }

  onFacilityCreated() {
    this.isCreatingFacility = false;
    this.loadFacilities(); // Refresca la lista de facilities después de la creación
  }

  showFacilityDetails(facilityId: number) {
    this.facilityDetailsComponent.loadFacility(facilityId);
  }
}
