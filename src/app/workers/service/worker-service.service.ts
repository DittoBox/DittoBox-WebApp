import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Template } from "../../containers/model/template-model/template.entity";

@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {

  Baseurl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/workers`);
  }

  getWorkerbyId(facilityID: string): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/workers/${facilityID}`);
  }
}

