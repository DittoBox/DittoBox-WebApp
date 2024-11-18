import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
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
import { TranslateModule } from '@ngx-translate/core';
import { group } from '@angular/animations';
import {Router} from "@angular/router";

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
        MatIconButton,
        TranslateModule,
        DecimalPipe
    ],
  templateUrl: './container-details.component.html',
  styleUrl: './container-details.component.css'
})
export class ContainerDetailsComponent{
  container !: any;
  opened: boolean = false;
  digitInfo = '1.2-2';

  constructor(private containerService: ContainerServiceService, public dialog:MatDialog,private snackBar: MatSnackBar, private router : Router) { }

  loadContainer(containerId: number) {
    this.containerService.getContainerbyId(containerId.toString()).subscribe(data => {
      this.container = {
        id: data.id,
        name: data.name,
        description: data.description,
        groupId: data.groupId,
        status: data.status,
        temperature: data.temperature,
        humidity: data.humidity,
        oxygen: data.oxygen,
        dioxide: data.dioxide,
        ethylene: data.ethylene,
        ammonia: data.ammonia,
        sulfurDioxide: data.sulfurDioxide,
        lastSync: data.lastSync != "0001-01-01T00:00:00" ? new Date(data.lastSync).toLocaleString() : "never",
        maxTemp: data.maxTemp,
        minTemp: data.minTemp,
        maxHumidity: data.maxHumidity,
        minHumidity: data.minHumidity,
        oxygenMin: data.oxygenMin,
        oxygenMax: data.oxygenMax,
        dioxideMin: data.dioxideMin,
        dioxideMax: data.dioxideMax,
        ethyleneMin: data.ethyleneMin,
        ethyleneMax: data.ethyleneMax,
        ammoniaMin: data.ammoniaMin,
        ammoniaMax: data.ammoniaMax,
        sulfurDioxideMin: data.sulfurDioxideMin,
        sulfurDioxideMax: data.sulfurDioxideMax,
        lastKnownHealthStatus: data.lastKnownHealthStatus,
        lastKnownContainerStatus: data.lastKnownContainerStatus
      };
      this.opened = true;
  
      console.log(this.container);
  
    }, error => {
      console.error('Error al obtener el contenedor:', error);
    });
  }

  openDialog() {
    this.dialog.open(ContianerEditComponent, {
      width: '450px',
      data: {
        ...this.container,
      }
    });
  }

  changeTemplate() {
      // go to template rute using router
      this.router.navigateByUrl('/templates');
  }

}
