import {Component, OnInit} from '@angular/core';
import {ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {DashboardService} from "../../service/dashboard.service";

@Component({
  selector: 'app-pie-chart-privileges',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './pie-chart-privileges.component.html',
  styleUrl: './pie-chart-privileges.component.css'
})
export class PieChartPrivilegesComponent implements OnInit {


  accountId: number;
  users: any[] = [];
  groups: any[] = [];
  containers: any[] = [];
  facilities: any[] = [];

  public usersChartData: number[] = [];
  public privilegesChartLabels: string[] = ['Owners', 'Managers', 'Workers'];
  public privilegesChartData: number[] = [];
  public privilegesChartType: ChartType = 'pie';

  constructor(private dashboardService: DashboardService) {
    const storedAccountId = localStorage.getItem('accountId');
    this.accountId = storedAccountId ? parseInt(storedAccountId, 10) : 0;
  }
  ngOnInit(): void {
    if (this.accountId) {
      this.loadUsers();
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
}
