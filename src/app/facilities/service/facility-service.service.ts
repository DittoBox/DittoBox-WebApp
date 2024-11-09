import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from '../model/facility-model/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  Baseurl: string = 'https://app-prod-01-dittobox-argeesg8era0c7ex.eastus-01.azurewebsites.net/api/v1/group';

  constructor(private http: HttpClient) {}

  // Método para obtener un solo facility por ID
  getFacilityById(facilityID: string): Observable<Facility> {
    return this.http.get<Facility>(`${this.Baseurl}/${facilityID}`);
  }

  // Método para obtener todos los facilities
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.Baseurl}`);
  }
}
