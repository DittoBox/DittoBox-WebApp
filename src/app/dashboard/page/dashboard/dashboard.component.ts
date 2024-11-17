import { Component } from '@angular/core';
import {
  BarChartContainersByFacilityComponent
} from "../../components/bar-chart-containers-by-facility/bar-chart-containers-by-facility.component";
import {
  BarChartWorkersByFacilityComponent
} from "../../components/bar-chart-workers-by-facility/bar-chart-workers-by-facility.component";
import {
  BaseChartStatusContainerComponent
} from "../../components/base-chart-status-container/base-chart-status-container.component";
import {PieChartPrivilegesComponent} from "../../components/pie-chart-privileges/pie-chart-privileges.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BarChartContainersByFacilityComponent,
    BarChartWorkersByFacilityComponent,
    BaseChartStatusContainerComponent,
    PieChartPrivilegesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
