import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() workerSelected = new EventEmitter<number>();

  constructor(private workerServiceService: WorkerServiceService) {}

  ngOnInit() {
    const myUserId = localStorage.getItem('userId');

    this.workerServiceService.getWorkers().subscribe((data: any[]) => {
      if (myUserId !== null) {
        this.workersItems = data.filter(worker => worker.id !== +myUserId);
      } else {
        this.workersItems = data;
      }
    });
  }

  openWorkerDialog(workerId: number) {
    this.workerSelected.emit(workerId);
  }
}
