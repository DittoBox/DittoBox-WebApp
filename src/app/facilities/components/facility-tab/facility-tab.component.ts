import { Component, OnInit, ViewChild } from '@angular/core';
import { FacilityServiceService } from '../../service/facility-service.service';
import { Facility } from '../../model/facility-model/facility.model';
import { FacilityDetailsComponent } from '../facility-details/facility-details.component';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { FacilityItemsComponent } from '../facility-items/facility-items.component';
import { FacilityCreateComponent } from '../facility-create/facility-create.component';

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatTabsModule,
    FacilityDetailsComponent,
    FacilityItemsComponent,
    FacilityCreateComponent
  ],
  templateUrl: './facility-tab.component.html',
  styleUrls: ['./facility-tab.component.css']
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
