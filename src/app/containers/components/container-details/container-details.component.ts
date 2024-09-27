import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {Container} from "../../model/container-model/container.entity";
import {Template} from "../../model/template-model/template.entity";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {ContianerEditComponent} from "../contianer-edit/contianer-edit.component";
import {MatDialog, MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-container-details',
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


  ],
  templateUrl: './container-details.component.html',
  styleUrl: './container-details.component.css'
})
export class ContainerDetailsComponent {
  container: Container | null = null;
  template: Template | null = null; // Agregar template
  isButtonDisabled: boolean = true;
  opened: boolean = false;

  constructor(private containerService: ContainerServiceService, public dialog:MatDialog,private snackBar: MatSnackBar) { }

  loadContainer(containerId: number) {
    this.containerService.getContainerbyId(containerId.toString()).subscribe(data => {
      this.container = new Container(
        data.containerID,
        data.status,
        data.temperature,
        data.humidity,
        data.lastSync,
        data.idTemplates // Asegúrate de que esto exista
      );

      // Comprobación para asegurar que templateId no es nulo
      if (this.container && this.container.idTemplates) {
        this.containerService.getTemplateById(this.container.idTemplates).subscribe(templateData => {
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

          // Abre el sidenav cuando cargue la data
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
      width: '450px', // Puedes personalizar el tamaño del diálogo
      data:this.template
    });
  }

  onButtonClick(): void {
    if (this.isButtonDisabled) {
      this.snackBar.open('You are not a premium user.', 'Close', {
        duration: 3000, // Duración en milisegundos
      });
    }
  }

}
