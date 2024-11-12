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

    idGroup = Number(localStorage.getItem('groupId'));
    privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')


  constructor(private containerService: ContainerServiceService) {}

  ngOnInit() {
    this.loadContainers();
  }

  loadContainers() {
    if (this.privileges.includes('AccountManagement')) {
      this.containerService.getContainersByAccountId(Number(localStorage.getItem('accountId'))).subscribe((data: Container[]) => {
        this.allContainers = data;
        this.activeContainers = data.filter(container => container.lastKnownContainerStatus === 'Running');
      });
    } else {
        this.containerService.getContainersByGroupId(this.idGroup).subscribe((data: Container[]) => {
          this.allContainers = data;
          this.activeContainers = data.filter(container => container.lastKnownContainerStatus === 'Running');
        });
    }
  }
}
