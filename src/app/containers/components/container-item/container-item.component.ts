import { Component, Input, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import {NgClass, NgForOf} from "@angular/common";
import { ContainerServiceService } from "../../service/container-service.service";
import { ContainerDetailsComponent } from "../container-details/container-details.component";
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {Container} from "../../model/container-model/container.entity";
import { formatDistanceToNow } from 'date-fns';

@Component({
  selector: 'app-container-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatIconModule,
    MatProgressSpinnerModule,
    NgClass
  ],
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css']
})
export class ContainerItemComponent implements OnInit {

  @Input() containerItems: Container[] = [];
  isLoading = false;

  constructor(private sidenavComponent: ContainerDetailsComponent, private containerServiceService: ContainerServiceService) { }

  ngOnInit(): void {}

  openContainerSidenav(containerId: number) {
    this.isLoading = true;
    Promise.resolve(this.sidenavComponent.loadContainer(containerId)).finally(() => {
      this.isLoading = false;
    });
  }

  getLastSync(container: Container): string {
    if (!container.lastSync || container.lastSync === "0001-01-01T00:00:00") {
      return 'never'; // Handle cases where the date is invalid or never synced
    }

    const lastSyncDate = new Date(container.lastSync);
    const timeAgo = formatDistanceToNow(lastSyncDate, { addSuffix: true });

    if (timeAgo.includes('seconds') || timeAgo.includes('less than a minute')) {
      return 'just now'; // Friendly message for very recent times
    }

    return timeAgo;
  }
}