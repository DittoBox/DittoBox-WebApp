import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BaseService } from '../../shared/service/base.service';
import { Facility } from '../../facilities/model/facility-model/facility.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }



  getGroups(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/${accountId}/groups`);
  }


  getContainers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/${accountId}/containers`);
  }
  getUsers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/${accountId}/users`);
  }

  getGroupsByAccount(accountId: number): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.baseUrl}/account/${accountId}/groups`);
  }

}
