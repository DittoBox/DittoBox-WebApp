import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facility } from '../model/facility-model/facility.model';
import { BaseService } from '../../shared/service/base.service';

@Injectable({
	providedIn: 'root'
})
export class FacilityServiceService extends BaseService {
	constructor(private http: HttpClient) {
		super();
	}

	// Método para obtener los grupos según el `accountId`
	getGroupsByAccount(accountId: string): Observable<Facility[]> {
		return this.http.post<Facility[]>(`${this.baseUrl}/group/by-account`,
			{ accountId: accountId },
			{
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
			}
		);
	}

	createGroup(groupData: any): Observable<any> {
		return this.http.post(`${this.baseUrl}/group/create-group`, groupData, {
			headers: { 'Accept': 'application/json' }
		});
	}

	registerContainer(groupId: number, data: any) {
		return this.http.post<any>(`${this.baseUrl}/container`, data);
	}

	registerWorker(groupId: number, workerData: any): Observable<any> {
		return this.http.post<any>(`${this.baseUrl}/profile/assign-to-facility`, workerData);
	}

}
