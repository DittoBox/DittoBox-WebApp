import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {User} from "../model/user/user.entity";
import {Account} from "../../settings/model/account/account.entity";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  BaseUrl: string = 'https://app-dev-01-dittobox-a8bpd5bkh4dnh3g7.eastus-01.azurewebsites.net';

  constructor(private http: HttpClient) {}

  // Método para crear un User
  createUser(user: User): Observable<any> {
    return this.http.post(`${this.BaseUrl}/api/v1/user`, user);
  }

  // Método para hacer login y obtener el token
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.BaseUrl}/api/v1/user/login`, loginData);
  }

  // Método para crear un Account
  createAccount(account: Account, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` }; // Añadir el token en los headers
    return this.http.post(`${this.BaseUrl}/api/v1/account`, account, { headers });
  }
}
