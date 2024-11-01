import { Component } from '@angular/core';
import { WorkerItemsComponent } from "../../components/worker-items/worker-items.component";
import {WorkerDetailsComponent} from "../../components/worker-details/worker-details.component";
import {FacilityDetailsComponent} from "../../../facilities/components/facility-details/facility-details.component";
import {FacilityTabComponent} from "../../../facilities/components/facility-tab/facility-tab.component";

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [
    WorkerItemsComponent,
    WorkerDetailsComponent,
    FacilityDetailsComponent,
    FacilityTabComponent
  ],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {

}
