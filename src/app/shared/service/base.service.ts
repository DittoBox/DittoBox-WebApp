import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	// protected baseUrl = 'https://webservices.mydittobox.net';
	protected baseUrl = 'http://localhost:5007';
}