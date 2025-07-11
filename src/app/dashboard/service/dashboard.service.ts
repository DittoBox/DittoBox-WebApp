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
    return this.http.get(`${this.baseUrl}/${accountId}/groups`);
  }


  getContainers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/container/by-account/${accountId}`);
  }
  getUsers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/workers/${accountId}`);
  }

  getGroupsByAccount(accountId: number): Observable<Facility[]> {
    return this.http.post<Facility[]>(`${this.baseUrl}/group/by-account`,
      { accountId: accountId },
      {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    );
  }

}
