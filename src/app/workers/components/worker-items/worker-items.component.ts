import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { WorkerServiceService } from "../../service/worker-service.service";
import { WorkerDetailsComponent } from "../worker-details/worker-details.component";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { NgForOf } from "@angular/common";
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton } from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';


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
    TranslateModule
  ],
  templateUrl: './worker-items.component.html',
  styleUrl: './worker-items.component.css'
})
export class WorkerItemsComponent implements OnInit {
  @Input() workersItems: any[] = [];
  @Output() workerSelected = new EventEmitter<number>();

  constructor(private workerServiceService: WorkerServiceService) { }

  ngOnInit() {
    const myUserId = localStorage.getItem('userId');
    console.log('WorkerItems - userId:', myUserId);

    this.workerServiceService.getWorkers().subscribe({
      next: (data: any[]) => {
        console.log('WorkerItems - Raw data received:', data);
        // Mostrar todos los trabajadores (incluyendo el usuario actual)
        this.workersItems = data;
        console.log('WorkerItems - Workers to display:', this.workersItems);
      },
      error: (error) => {
        console.error('WorkerItems - Error loading workers:', error);
      }
    });
  }

  openWorkerDialog(workerId: number) {
    this.workerSelected.emit(workerId);
  }
}
