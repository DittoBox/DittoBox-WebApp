import {Component, OnInit} from '@angular/core';
import {ChartType} from "chart.js";
import {DashboardService} from "../../service/dashboard.service";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-base-chart-status-container',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './base-chart-status-container.component.html',
  styleUrl: './base-chart-status-container.component.css'
})
export class BaseChartStatusContainerComponent implements OnInit {
  accountId: number;
  users: any[] = [];
  groups: any[] = [];
  containers: any[] = [];
  facilities: any[] = [];
  public activeContainersChartLabels: string[] = ['Active', 'Inactive'];
  public activeContainersChartData: number[] = [];
  public activeContainersChartType: ChartType = 'polarArea';
  public containersChartLabels: string[] = [];
  public containersChartData: number[] = [];

  constructor(private dashboardService: DashboardService) {
    const storedAccountId = localStorage.getItem('accountId');
    this.accountId = storedAccountId ? parseInt(storedAccountId, 10) : 0;
  }
  ngOnInit(): void {
    if (this.accountId) {

      this.loadContainers();
    } else {
      console.error('Account ID is not available in local storage.');
    }
  }

  loadContainers(): void {
    this.dashboardService.getContainers(this.accountId).subscribe(data => {
      this.containers = data;
      this.containersChartLabels = this.containers.map(container => container.name);
      this.containersChartData = this.containers.map(container => container.temperature);

      // Filtrar y seleccionar datos para contenedores activos
      const activeContainers = this.containers.filter(container => container.lastKnownContainerStatus === 'Active').length;
      const inactiveContainers = this.containers.filter(container => container.lastKnownContainerStatus !== 'Active').length;
      this.activeContainersChartData = [activeContainers, inactiveContainers];
    });
  }
}
