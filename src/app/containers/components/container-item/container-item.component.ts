import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {ContainerDetailsComponent} from "../container-details/container-details.component";
import {Container} from "../../model/container-model/container.entity";

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
export class ContainerItemComponent implements OnInit {

  @Input() containerItems: any[] = []; // Esto sería lo que recibes del servicio (simulado aquí)

  constructor(private sidenavComponent: ContainerDetailsComponent, private containerServiceService: ContainerServiceService) { }

  openContainerSidenav(containerId: number) {
    this.sidenavComponent.loadContainer(containerId); // Pasamos el ID al sidenav
  }

  ngOnInit() {
    this.containerServiceService.getContainers().subscribe((data: any[]) => {
      this.containerItems = data;
    });
  }
}
