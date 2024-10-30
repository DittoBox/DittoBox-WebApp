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

  getFacilities(): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/facilities`);
  }

  getFacilitybyId(facilityID: string): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/facilities/${facilityID}`);
  }
}

