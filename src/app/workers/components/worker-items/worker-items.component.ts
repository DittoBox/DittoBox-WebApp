import {Component, Input, OnInit} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WorkerServiceService} from "../../service/worker-service.service";
import {WorkerDetailsComponent} from "../worker-details/worker-details.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-worker-items',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatIcon,
    NgForOf,
  ],
  templateUrl: './worker-items.component.html',
  styleUrl: './worker-items.component.css'
})
export class WorkerItemsComponent implements OnInit {
  @Input() workersItems: any[] = [];

  constructor(
    private sidenavComponent: WorkerDetailsComponent,
    private workerServiceService: WorkerServiceService
  ) {}

  ngOnInit() {
    this.workerServiceService.getWorkers().subscribe((data: any[]) => {
      this.workersItems = data;
    });
  }

  openWorkerDialog(workerId: number) {
    this.sidenavComponent.loadWorker(workerId);
  }
}
