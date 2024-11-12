import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
  styleUrl: './container-tab.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContainerTabComponent implements  OnInit{
  allContainers: Container[] = [];
  activeContainers: Container[] = [];


  // using idGroup = 1 as an example
  // this must be replaced when the iam feature is implemented
    idGroup = 1;


  constructor(private containerService: ContainerServiceService) {}

  ngOnInit() {
    this.loadContainers();
  }

  loadContainers() {
    this.containerService.getContainersByGroupId(this.idGroup).subscribe((data: Container[]) => {
      this.allContainers = data;
      this.activeContainers = data.filter(container => container.lastKnownContainerStatus === 'Running');
    });
  }
}
