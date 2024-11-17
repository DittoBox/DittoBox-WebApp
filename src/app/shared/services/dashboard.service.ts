import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'https://app-dev-01-dittobox-a8bpd5bkh4dnh3g7.eastus-01.azurewebsites.net/api/v1/account';

  constructor(private http: HttpClient) {}

  getUsers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/users`);
  }

  getGroups(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/groups`);
  }

  getContainers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/containers`);
  }
}