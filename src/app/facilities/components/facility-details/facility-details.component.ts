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
  facility: any; // Suponiendo que ya tienes cargado el objeto facility con sus datos
  opened: boolean = false;

  constructor(private facilityService: FacilityServiceService, public dialog: MatDialog) {}

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
          // Aquí puedes actualizar el conteo de contenedores si es necesario
        },
        error => {
          console.error('Error registering container:', error);
        }
      );
    }
  }
}
