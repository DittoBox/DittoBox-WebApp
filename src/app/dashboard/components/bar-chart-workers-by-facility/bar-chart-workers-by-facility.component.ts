import {Component, OnInit} from '@angular/core';
import {ChartType} from "chart.js";
import {DashboardService} from "../../service/dashboard.service";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-bar-chart-workers-by-facility',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './bar-chart-workers-by-facility.component.html',
  styleUrl: './bar-chart-workers-by-facility.component.css'
})
export class BarChartWorkersByFacilityComponent implements OnInit {
  public groupsChartLabels: string[] = ['Users'];
  public groupsChartData: number[] = [];
  public facilitychartType: ChartType = 'bar';
  public barColors: string[] = [];

  accountId:number;
  users: any[] = [];
  groups: any[] = [];
  containers: any[] = [];
  facilities: any[] = [];
  constructor(private dashboardService: DashboardService) {
    const storedAccountId = localStorage.getItem('accountId');
    this.accountId = storedAccountId ? parseInt(storedAccountId, 10) : 0
  }

  ngOnInit(): void {
    if (this.accountId) {
      this.loadGroups();
    } else {
      console.error('Account ID is not available in local storage.');
    }

  }

  loadGroups(): void {
    this.dashboardService.getGroups(this.accountId).subscribe(data => {
      this.groups = data;
      this.groupsChartLabels = this.groups.map(group => group.name);
      this.groupsChartData = this.groups.map(group => group.profileCount);
      this.barColors = this.groups.map(() => this.getRandomColor());

    });
  }
  getRandomColor(): string {
    const red = Math.floor(Math.random() * 56) + 200; // Red values between 200 and 255
    const green = Math.floor(Math.random() * 56) + 200; // Green values between 200 and 255
    const blue = Math.floor(Math.random() * 56) + 200; // Blue values between 200 and 255
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
