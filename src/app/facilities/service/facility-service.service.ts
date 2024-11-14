import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from '../model/facility-model/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  BaseUrl: string = 'https://app-dev-01-dittobox-a8bpd5bkh4dnh3g7.eastus-01.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}


  getGroupsByAccount(accountId: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.BaseUrl}/account/${accountId}/groups`, {
      headers: { 'Accept': 'application/json' }
    });
  }

  createGroup(groupData: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/group/create-group`, groupData, {
      headers: { 'Accept': 'application/json' }
    });
  }

  registerContainer(groupId: number, containerData: any): Observable<any> {
    return this.http.post(`${this.BaseUrl}/group/${groupId}/register-container`, containerData);
  }

}
