import { Component } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { NgForOf, NgIf } from "@angular/common";
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatButtonToggle } from "@angular/material/button-toggle";
import { RouterLink } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FacilityServiceService } from "../../service/facility-service.service";
import { Facility, Location } from "../../model/facility-model/facility.model";

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
    MatButtonToggle,
    RouterLink,
    MatIcon,
    MatDivider,
    MatIconButton,
  ],
  templateUrl: './facility-details.component.html',
  styleUrl: './facility-details.component.css'
})
export class FacilityDetailsComponent {
  facility: Facility | null = null;
  opened: boolean = false;

  constructor(private facilityService: FacilityServiceService, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  loadFacility(facilityId: number) {
    this.facilityService.getFacilityById(facilityId.toString()).subscribe((data: Facility) => {
      const location = new Location(
        data.location.id,
        data.location.latitude,
        data.location.longitude,
        data.location.plusCode,
        data.location.country,
        data.location.state,
        data.location.city,
        data.location.address
      );
      this.facility = new Facility(
        data.id,
        data.name,
        location,
        data.accountId,
        data.facilityType,
        data.containers,
        data.alerts,
        data.workers,
        data.status,
        data.type,
        data.idTemplates
      );

      this.opened = true;
    }, (error: any) => {
      console.error('Error al obtener el facility:', error);
    });
  }
}
