import { Component } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { NgForOf, NgIf } from "@angular/common";
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { FacilityServiceService } from "../../service/facility-service.service";
import { Facility } from "../../model/facility-model/facility.model";
import {AddContainerDialogComponent} from "../add-container-dialog/add-container-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FacilityServiceService} from "../../service/facility-service.service";
import {Facility} from "../../model/facility-model/facility.model";
import { TranslateModule } from '@ngx-translate/core';
import {AddWorkerDialogComponent} from "../add-worker-dialog/add-worker-dialog.component";

@Component({
  selector: 'app-facility-details',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    NgForOf,
    MatSidenav,
    MatButton,
    MatSidenavContainer,
    NgIf,
    MatSidenavContent,
    MatIcon,
    MatDivider,
    MatIconButton,
    TranslateModule,
    AddContainerDialogComponent,
  ],
  templateUrl: './facility-details.component.html',
  styleUrl: './facility-details.component.css'
})
export class FacilityDetailsComponent {
  facility: Facility | null = null;
  opened: boolean = false;

  constructor(
    private facilityService: FacilityServiceService,
    public dialog: MatDialog
  ) {}

  loadFacility(facilityId: number) {
    const accountId = localStorage.getItem('accountId');
    if (accountId) {
      this.facilityService.getGroupsByAccount(accountId).subscribe((facilities: Facility[]) => {
        this.facility = facilities.find(facility => facility.id === facilityId) || null;
        this.opened = !!this.facility;
      });
    }
  }

  openAddContainerDialog() {
    if (this.facility?.accountId) {
      const dialogRef = this.dialog.open(AddContainerDialogComponent, {
        width: '300px',
        data: { accountId: this.facility.accountId }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.addContainer(result);
        }
      });
    } else {
      console.error("Facility or accountId is null.");
    }
  }

  getFacilityType(): string {
    return this.facility?.facilityType === 0 ? 'Restaurant' : 'Warehouse';
  }


  addContainer(containerData: any) {
    if (this.facility && this.facility.id) {
      const payload = {
        groupId: this.facility.id,
        containerId: containerData.containerId,
        accountId: this.facility.accountId,
        code: containerData.code
      };

      this.facilityService.registerContainer(this.facility.id, payload).subscribe(
        response => {
          console.log('Container registered successfully:', response);
          this.facility!.containerCount = (this.facility?.containerCount || 0) + 1;
        },
        error => {
          console.error('Error registering container:', error);
        }
      );
    }
  }

  openAddWorkerDialog() {
    const dialogRef = this.dialog.open(AddWorkerDialogComponent, {
      width: '300px',
      data: { accountId: this.facility?.accountId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addWorker(result);
      }
    });
  }

  addWorker(workerData: any) {
    if (this.facility && this.facility.id) {
      const payload = {
        ...workerData,
        groupId: this.facility.id
      };

      this.facilityService.registerWorker(this.facility.id, payload).subscribe(
        response => {
          console.log('Worker registered successfully:', response);
          // Aquí puedes actualizar el conteo de trabajadores si es necesario
        },
        error => {
          console.error('Error registering worker:', error);
        }
      );
    }
  }
}
