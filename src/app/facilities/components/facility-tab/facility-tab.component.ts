import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacilityServiceService } from '../../service/facility-service.service';
import { AddContainerDialogComponent } from '../add-container-dialog/add-container-dialog.component';

@Component({
  selector: 'app-facility-tab',
  templateUrl: './facility-tab.component.html',
  styleUrls: ['./facility-tab.component.css']
})
export class FacilityTabComponent {
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
