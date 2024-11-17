import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChartType } from 'chart.js';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { DashboardService } from '../shared/services/dashboard.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accountId: number;
  users: any[] = [];
  groups: any[] = [];
  containers: any[] = [];

  public usersChartLabels: string[] = ['Users'];
  public usersChartData: number[] = [];
  public usersChartType: ChartType = 'bar';

  public groupsChartLabels: string[] = [];
  public groupsChartData: number[] = [];
  public groupsChartType: ChartType = 'pie';

  public containersChartLabels: string[] = [];
  public containersChartData: number[] = [];
  public containersChartType: ChartType = 'line';

  public privilegesChartLabels: string[] = ['Owners', 'Managers', 'Workers'];
  public privilegesChartData: number[] = [];
  public privilegesChartType: ChartType = 'doughnut';

  public activeContainersChartLabels: string[] = ['Active', 'Inactive'];
  public activeContainersChartData: number[] = [];
  public activeContainersChartType: ChartType = 'polarArea';

  constructor(private dashboardService: DashboardService) {
    const storedAccountId = localStorage.getItem('accountId');
    this.accountId = storedAccountId ? parseInt(storedAccountId, 10) : 0;
  }

  ngOnInit(): void {
    if (this.accountId) {
      this.loadUsers();
      this.loadGroups();
      this.loadContainers();
    } else {
      console.error('Account ID is not available in local storage.');
    }
  }

  loadUsers(): void {
    this.dashboardService.getUsers(this.accountId).subscribe(data => {
      this.users = data;
      this.usersChartData = [this.users.length];

      // Filtrar y seleccionar datos para privilegios
      const owners = this.users.filter(user => user.privileges.length === 3).length;
      const managers = this.users.filter(user => user.privileges.length === 1 || user.privileges.length === 2).length;
      const workers = this.users.filter(user => user.privileges.length === 0).length;
      this.privilegesChartData = [owners, managers, workers];
    });
  }

  loadGroups(): void {
    this.dashboardService.getGroups(this.accountId).subscribe(data => {
      this.groups = data;
      this.groupsChartLabels = this.groups.map(group => group.name);
      this.groupsChartData = this.groups.map(group => group.containerCount);
    });
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