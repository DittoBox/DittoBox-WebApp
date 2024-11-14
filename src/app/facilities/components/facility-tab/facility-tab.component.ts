import { Component, OnInit, ViewChild } from '@angular/core';
import { Facility } from '../../model/facility-model/facility.model';
import { FacilityItemsComponent } from '../facility-items/facility-items.component';
import { FacilityServiceService } from '../../service/facility-service.service';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { FacilityDetailsComponent } from "../facility-details/facility-details.component";
import {FacilityCreateComponent} from "../facility-create/facility-create.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  imports: [
    FacilityItemsComponent,
    MatButtonToggle,
    MatTabGroup,
    MatTab,
    FacilityDetailsComponent,
    FacilityCreateComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './facility-tab.component.html',
  styleUrls: ['./facility-tab.component.css']
})
export class FacilityTabComponent implements OnInit {
  allFacilities: Facility[] = [];
  activeFacility: Facility[] = [];
  isCreatingFacility = false; // Nueva variable para manejar el estado de creación

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
        this.activeFacility = this.allFacilities.filter(facility => facility.status === 'Active');
      });
    }
  }

  toggleCreateFacility() {
    this.isCreatingFacility = !this.isCreatingFacility; // Cambia el estado de creación
  }

  showFacilityDetails(facilityId: number) {
    this.facilityDetailsComponent.loadFacility(facilityId);
  }

  onFacilityCreated() {
    this.loadFacilities(); // Recarga la lista de facilities
    this.isCreatingFacility = false; // Cierra el formulario de creación
  }
}

