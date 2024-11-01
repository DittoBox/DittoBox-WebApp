import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FacilityServiceService} from "../../service/facility-service.service";
import {Facility} from "../../model/facility-model/facility.model";

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

  constructor(private facilityService: FacilityServiceService, public dialog:MatDialog,private snackBar: MatSnackBar) { }

  loadFacility(facilityId: number) {
    this.facilityService.getFacilitybyId(facilityId.toString()).subscribe(data => {
      this.facility = new Facility(
        data.id,
        data.name,
        data.location,
        data.containers,
        data.alerts,
        data.workers,
        data.status,
        data.type,
        data.idTemplates
    );
      if (this.facility && this.facility.id) {
        this.facilityService.getFacilitybyId(this.facility.id).subscribe(facilityData => {
          this.facility = new Facility(
            data.id,
            data.name,
            data.location,
            data.containers,
            data.alerts,
            data.workers,
            data.status,
            data.type,
            data.idTemplates
          );

          this.opened = true;
        }, error => {
          console.error('Error al obtener:', error);
        });
      } else {
        console.error('definido o facility es nulo');
      }

    }, error => {
      console.error('Error al obtener el facility:', error);
    });
  }

}
