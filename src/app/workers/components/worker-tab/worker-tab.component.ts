import {Component, ViewChild} from '@angular/core';
import {WorkerDetailsComponent} from "../worker-details/worker-details.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WorkerItemsComponent} from "../worker-items/worker-items.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-worker-tab',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    WorkerItemsComponent,
    WorkerDetailsComponent,
    CommonModule
  ],
  templateUrl: './worker-tab.component.html',
  styleUrl: './worker-tab.component.css'
})
export class WorkerTabComponent  {
  @ViewChild(WorkerDetailsComponent) workerDetailsComponent!: WorkerDetailsComponent;

  onWorkerSelected(workerId: number) {
    if (this.workerDetailsComponent) {
      this.workerDetailsComponent.loadWorker(workerId);
    } else {
      console.error("workerDetailsComponent no está inicializado");
    }
  }
}
