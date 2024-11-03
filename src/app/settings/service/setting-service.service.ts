import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AccountUsage } from '../model/subscription/subscription.entity';




@Injectable({
	providedIn: 'root'
})
export class SettingServiceService {
	Baseurl: string = 'http://localhost:3000';
	constructor(private http: HttpClient) { }

	getNotifications(): Observable<any> {
		return this.http.get<any>(`${this.Baseurl}/notifications`);
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


