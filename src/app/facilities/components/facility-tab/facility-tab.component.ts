import { Component, OnInit, ViewChild } from '@angular/core';
import { FacilityServiceService } from '../../service/facility-service.service';
import { Facility } from '../../model/facility-model/facility.model';
import { FacilityDetailsComponent } from '../facility-details/facility-details.component';
import { FacilityCreateComponent } from '../facility-create/facility-create.component';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {FacilityItemsComponent} from "../facility-items/facility-items.component";

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  imports: [
    FacilityDetailsComponent,
    FacilityCreateComponent,
    MatSidenav,
    MatTabGroup,
    MatSidenavContainer,
    MatTab,
    FacilityItemsComponent,
    MatSidenavModule
  ],
  templateUrl: './facility-tab.component.html',
  styleUrls: ['./facility-tab.component.css']
})
export class FacilityTabComponent implements OnInit {
  allFacilities: Facility[] = [];
  isCreatingFacility: boolean = false; // Agrega esta variable

  @ViewChild(FacilityDetailsComponent) facilityDetailsComponent!: FacilityDetailsComponent;
  @ViewChild('createSidenav') createSidenav!: MatSidenav;

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

  openCreateSidenav() {
    this.isCreatingFacility = true; // Activa el sidenav de creación
    this.createSidenav.open();
  }

  onFacilityCreated() {
    this.isCreatingFacility = false; // Desactiva el sidenav de creación después de crear
    this.createSidenav.close();
    this.loadFacilities(); // Refresca la lista de facilities después de la creación
  }

  showFacilityDetails(facilityId: number) {
    this.facilityDetailsComponent.loadFacility(facilityId);
  }
}
