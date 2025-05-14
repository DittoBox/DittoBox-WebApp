import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, finalize } from 'rxjs/operators';
import { Template } from "../model/template-model/template.entity";
import { Container } from "../model/container-model/container.entity";
import { BaseService } from '../../shared/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService extends BaseService {

  // to manage the templates selection
  private templateSource = new BehaviorSubject<any>(null);
  templateSelected = this.templateSource.asObservable();

  // to manage loading state
  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor(private http: HttpClient) {
		super();
	}

  private setLoading(loading: boolean) {
    this.loadingSource.next(loading);
  }

  getContainers(): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.baseUrl}/container`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainersByAccountId(accountId: number): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.baseUrl}/account/${accountId}/containers`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainersByGroupId(groupId: number): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.baseUrl}/group/${groupId}/containers`).pipe(
        finalize(() => this.setLoading(false))
    );
  }

  getTemplates(): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.baseUrl}/template`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainerbyId(containerID: any): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.baseUrl}/container/${containerID}`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  updateContainerParameters(containerId: number, parameters: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/container/${containerId}/parameters`, parameters);
  }


  selectTemplate(template: Template) {
    this.templateSource.next(template);
  }

  assignTemplateToContainer(containerId: number, templateId: number) {
    this.setLoading(true);
    return this.http.post<any>(`${this.baseUrl}/container/${containerId}/assign/${templateId}`, {}).pipe(
      finalize(() => this.setLoading(false))
    );
  }
}
