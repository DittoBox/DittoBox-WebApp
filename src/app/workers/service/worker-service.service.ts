import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {

  Baseurl: string = 'https://app-dev-01-dittobox-a8bpd5bkh4dnh3g7.eastus-01.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<any> {
    const accountId = localStorage.getItem('accountId');
    return this.http.get<any>(`${this.Baseurl}/account/${accountId}/users`);
  }

  getWorkerbyId(workerId: string): Observable<any> {
    const accountId = localStorage.getItem('accountId');
    return this.http.get<any>(`${this.Baseurl}/account/${accountId}/users/${workerId}`);
  }

  getWorkersByAccount(accountId: string) {
    return this.http.get<any[]>(`${this.Baseurl}/account/${accountId}/users`);
  }

}
