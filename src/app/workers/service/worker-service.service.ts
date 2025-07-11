import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseService } from '../../shared/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getWorkers(): Observable<any> {
    const accountId = localStorage.getItem('accountId');
    return this.http.get<any>(`${this.baseUrl}/user/workers/${accountId}`);
  }

  getWorkerbyId(workerId: string): Observable<any> {
    const accountId = localStorage.getItem('accountId');
    return this.http.get<any>(`${this.baseUrl}/account/${accountId}/users/${workerId}`);
  }

  getWorkersByAccount(accountId: string) {
    return this.http.get<any[]>(`${this.baseUrl}/user/workers/${accountId}`);
  }
  grantPrivilege(profileId: number, privilegeId: number): Observable<any> {
    const url = `${this.baseUrl}/profile/grant-privileges`;
    const body = { profileId, privilegeId };
    console.log('grantPrivilege', body);
    return this.http.post(url, body);

  }

  revokePrivilege(profileId: number, privilegeId: number): Observable<any> {
    const url = `${this.baseUrl}/profile/revoke-privileges`;
    const body = { profileId, privilegeId };
    console.log('revokePrivilege', body);
    return this.http.put(url, body);
  }

}
