import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	protected baseUrl = 'https://dittobox-webservices.azurewebsites.net/api/v1';
}
