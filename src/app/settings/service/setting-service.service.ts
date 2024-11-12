import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { AccountUsage } from '../model/subscription/subscription.entity';
import {finalize} from "rxjs/operators";




@Injectable({
	providedIn: 'root'
})
export class SettingServiceService {
	Baseurl: string = 'http://localhost:3000';
	DevBaseurl: string = 'https://app-dev-01-dittobox-a8bpd5bkh4dnh3g7.eastus-01.azurewebsites.net/api/v1';

	private loadingSource = new BehaviorSubject<boolean>(false);
	loading$ = this.loadingSource.asObservable();

	constructor(private http: HttpClient) { }

	private setLoading(loading: boolean) {
		this.loadingSource.next(loading);
	}

	getNotifications(): Observable<any> {
		return this.http.get<any>(`${this.Baseurl}/notifications`);
	}

	getUserInformationById(userId: number): Observable<any> {
		this.setLoading(true);
		return this.http.get<any>(`${this.DevBaseurl}/user/${userId}`).pipe(
			finalize(() => this.setLoading(false))
		);
	}

	getProfileInformationById(profileId: number): Observable<any> {
		this.setLoading(true);
		return this.http.get<any>(`${this.DevBaseurl}/profile/${profileId}`).pipe(
			finalize(() => this.setLoading(false))
		);
	}

	getAccountUsage(): Observable<AccountUsage> {
		// return this.http.get<any>(`${this.Baseurl}/account-usage-report`);
		// 
		return new Observable<AccountUsage>(observer => {
			setTimeout(() => {
				observer.next({
					currentPlan: 'Advance',
					lowerPlan: 'Free',
					upperPlan: 'Enterprise',
					users: {
						currentUsage: 7,
						currentPlanLimit: 10,
						lowerPlanLimit: 5,
						upperPlanLimit: 15
					},
					containers: {
						currentUsage: 12,
						currentPlanLimit: 25,
						lowerPlanLimit: 10,
						upperPlanLimit: 100
					},
					facilities: {
						currentUsage: 4,
						currentPlanLimit: 5,
						lowerPlanLimit: 2,
						upperPlanLimit: 20
					}
				});
				observer.complete();
			}, 1000);
		});

	}

}


