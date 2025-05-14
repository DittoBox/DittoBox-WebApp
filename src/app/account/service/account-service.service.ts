import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap, tap, map} from "rxjs";
import {User} from "../model/user/user.entity";
import {Account} from "../../settings/model/account/account.entity";
import { BaseService } from '../../shared/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService extends BaseService {
  constructor(private http: HttpClient) {
		super();
	}

  // Método para crear un User
  createUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, user);
  }


  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.baseUrl}/user/login`, loginData).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('accountId', response.accountId);
          localStorage.setItem('groupId', response.groupId);
          localStorage.setItem('privileges', JSON.stringify(response.privileges));
          localStorage.setItem('profileId', response.profileId);
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('username', response.username);
        } else {
          throw new Error('Unsuccessful login');
        }
      })
    );
  }

  // Método para crear un Account
  createAccount(account: Account, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` }; // Añadir el token en los headers
    return this.http.post(`${this.baseUrl}/account`, account, { headers });
  }
}
