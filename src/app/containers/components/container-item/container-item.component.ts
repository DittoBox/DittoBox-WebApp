import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {ContainerDetailsComponent} from "../container-details/container-details.component";

@Component({
  selector: 'app-container-item',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        NgForOf
    ],
  templateUrl: './container-item.component.html',
  styleUrl: './container-item.component.css'
})
export class ContainerItemComponent {

  @Input() containerItems: any[] = [];

  constructor(private sidenavComponent: ContainerDetailsComponent, private containerServiceService: ContainerServiceService) { }

  openContainerSidenav(containerId: number) {
    this.sidenavComponent.loadContainer(containerId);
  }

}
