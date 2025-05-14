import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	protected baseUrl = 'https://dittobox-cloud-bubuexbzeyb5fqh6.westus2-01.azurewebsites.net/api/v1';
}