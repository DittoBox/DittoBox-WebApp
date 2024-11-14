import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacilityServiceService } from '../../service/facility-service.service';
import { AddContainerDialogComponent } from '../add-container-dialog/add-container-dialog.component';
import { FacilityDetailsComponent } from '../facility-details/facility-details.component';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import { FacilityCreateComponent } from "../facility-create/facility-create.component";
import { FacilityItemsComponent } from "../facility-items/facility-items.component";
import { Facility } from '../../model/facility-model/facility.model';

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  templateUrl: './facility-tab.component.html',
  imports: [
    FacilityDetailsComponent,
    MatTabGroup,
    MatTab,
    MatSidenavContainer,
    FacilityCreateComponent,
    FacilityItemsComponent,
    MatSidenav,
    MatSidenavModule
  ],
  styleUrls: ['./facility-tab.component.css']
})
export class FacilityTabComponent implements OnInit {
  allFacilities: Facility[] = [];
  facility: any;
  opened: boolean = false;
  isCreatingFacility: boolean = false;

  @ViewChild('createSidenav') createSidenav!: MatSidenav;
  @ViewChild(FacilityDetailsComponent) facilityDetailsComponent!: FacilityDetailsComponent;

  constructor(private facilityService: FacilityServiceService, public dialog: MatDialog) {}

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
    this.isCreatingFacility = true;
    this.createSidenav.open();
  }

  onFacilityCreated() {
    this.isCreatingFacility = false;
    this.createSidenav.close();
    this.loadFacilities();
  }


  showFacilityDetails(facilityId: number) {
    this.facilityDetailsComponent.loadFacility(facilityId);
  }

  openAddContainerDialog() {
    const dialogRef = this.dialog.open(AddContainerDialogComponent, {
      width: '300px',
      data: { accountId: this.facility.accountId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addContainer(result);
      }
    });
  }

  addContainer(containerData: any) {
    if (this.facility && this.facility.id) {
      this.facilityService.registerContainer(this.facility.id, containerData).subscribe(
        response => {
          console.log('Container registered successfully:', response);
        },
        error => {
          console.error('Error registering container:', error);
        }
      );
    }
  }
}
