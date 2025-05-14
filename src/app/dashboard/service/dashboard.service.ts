import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { BaseService } from '../../shared/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor( private http: HttpClient) {
		super();
	}



  getGroups(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/groups`);
  }


  getContainers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/containers`);
  }
  getUsers(accountId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}/users`);
  }

}
