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
import {Container} from "../../../containers/model/container-model/container.entity";
import {Template} from "../../../containers/model/template-model/template.entity";
import {FacilityServiceService} from "../../service/facility-service.service";
import {ContianerEditComponent} from "../../../containers/components/contianer-edit/contianer-edit.component";
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
  template: Template | null = null;
  isButtonDisabled: boolean = true;
  opened: boolean = false;

  constructor(private containerService: FacilityServiceService, public dialog:MatDialog,private snackBar: MatSnackBar) { }

  loadContainer(containerId: number) {
    this.containerService.getFacilitybyId(containerId.toString()).subscribe(data => {
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
      if (this.facility && this.facility.idTemplates) {
        this.containerService.getTemplateById(this.facility.idTemplates).subscribe(templateData => {
          this.template = new Template(
            templateData.id,
            templateData.nametemplate,
            templateData.descriptiontemplate,
            templateData.maxtemp,
            templateData.mintemp,
            templateData.maxhumidity,
            templateData.minhumidity,
            templateData.detectoxygen,
            templateData.detectdioxide,
            templateData.detectetylene,
            templateData.detectammonia,
            templateData.detectsulfurdioxide
          );


          this.opened = true;
        }, error => {
          console.error('Error al obtener el template:', error);
        });
      } else {
        console.error('templateId no está definido o container es nulo');
      }

    }, error => {
      console.error('Error al obtener el contenedor:', error);
    });
  }
  openDialog() {
    this.dialog.open(ContianerEditComponent, {
      width: '450px',
      data:this.template
    });
  }

  onButtonClick(): void {
    if (this.isButtonDisabled) {
      this.snackBar.open('You are not a premium user.', 'Close', {
        duration: 3000,
      });
    }
  }
}
