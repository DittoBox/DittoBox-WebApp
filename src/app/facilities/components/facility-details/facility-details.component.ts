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
  ],
  templateUrl: './facility-details.component.html',
  styleUrl: './facility-details.component.css'
})
export class FacilityDetailsComponent {
  facility: Facility | null = null;
  opened: boolean = false;

  constructor(private facilityService: FacilityServiceService) {}

  loadFacility(facilityId: number) {
    const accountId = localStorage.getItem('accountId'); // Obtener el accountId del localStorage
    if (accountId) {
      this.facilityService.getGroupsByAccount(accountId).subscribe((facilities: Facility[]) => {
        this.facility = facilities.find(facility => facility.id === facilityId) || null;
        this.opened = !!this.facility;
      });
    }
  }
}
