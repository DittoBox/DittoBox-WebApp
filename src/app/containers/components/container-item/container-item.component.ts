import { Component, Input, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { NgForOf } from "@angular/common";
import { ContainerServiceService } from "../../service/container-service.service";
import { ContainerDetailsComponent } from "../container-details/container-details.component";
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule
  ],
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css']
})
export class ContainerItemComponent implements OnInit {

  @Input() containerItems: any[] = [];
  isLoading = false;

  constructor(private sidenavComponent: ContainerDetailsComponent, private containerServiceService: ContainerServiceService) { }

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  openContainerSidenav(containerId: number) {
    this.isLoading = true;
    Promise.resolve(this.sidenavComponent.loadContainer(containerId)).finally(() => {
      this.isLoading = false;
    });
  }
}