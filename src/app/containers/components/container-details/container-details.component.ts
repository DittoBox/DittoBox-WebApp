import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Container} from "../../model/container-model/container.entity";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {ContianerEditComponent} from "../contianer-edit/contianer-edit.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";

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
        MatIcon,
        MatDivider,
        MatIconButton
    ],
  templateUrl: './container-details.component.html',
  styleUrl: './container-details.component.css'
})
export class ContainerDetailsComponent{
  container !: any;
  opened: boolean = false;

  constructor(private containerService: ContainerServiceService, public dialog:MatDialog,private snackBar: MatSnackBar) { }

    loadContainer(containerId: number) {
    this.containerService.getContainerbyId(containerId.toString()).subscribe(data => {
      this.container = new Container(
        data.id,
        data.name,
        data.description,
        data.status,
        data.temperature,
        data.humidity,
        data.oxygen,
        data.dioxide,
        data.ethylene,
        data.ammonia,
        data.sulfurDioxide,
        data.lastSync != "0001-01-01T00:00:00"? new Date(data.lastSync).toLocaleString() : "never",
        data.maxTemp,
        data.minTemp,
        data.maxHumidity,
        data.minHumidity,
        data.oxygenMin,
        data.oxygenMax,
        data.dioxideMin,
        data.dioxideMax,
        data.ethyleneMin,
        data.ethyleneMax,
        data.ammoniaMin,
        data.ammoniaMax,
        data.sulfurDioxideMin,
        data.sulfurDioxideMax,
        data.lastKnownHealthStatus,
        data.lastKnownContainerStatus
      );
        this.opened = true;

        console.log(this.container);

    }, error => {
      console.error('Error al obtener el contenedor:', error);
    });
  }

  openDialog() {
    this.dialog.open(ContianerEditComponent, {
      width: '450px',
      data: this.container
    });
  }

}
