import {Component, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ContainerItemComponent} from "../container-item/container-item.component";
import {Container} from "../../model/container-model/container.entity";
import {ContainerServiceService} from "../../service/container-service.service";

@Component({
  selector: 'app-container-tab',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    ContainerItemComponent
  ],
  templateUrl: './container-tab.component.html',
  styleUrl: './container-tab.component.css'
})
export class ContainerTabComponent implements  OnInit{
  allContainers: Container[] = []; // Todos los containers
  activeContainers: Container[] = []; // Solo los containers activos

  constructor(private containerService: ContainerServiceService) {}

  ngOnInit() {
    this.loadContainers();
  }

  loadContainers() {
    this.containerService.getContainers().subscribe((data: Container[]) => {
      this.allContainers = data; // Almacena todos los containers
      this.activeContainers = data.filter(container => container.status === 'Active'); // Filtra los activos
    });
  }
}
