import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, finalize } from 'rxjs/operators';
import { Template } from "../model/template-model/template.entity";
import { Container } from "../model/container-model/container.entity";

@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {

  Baseurl: string = 'http://localhost:3000';

  // to manage the templates selection
  private templateSource = new BehaviorSubject<any>(null);
  templateSelected = this.templateSource.asObservable();

  // to manage loading state
  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor(private http: HttpClient) { }

  private setLoading(loading: boolean) {
    this.loadingSource.next(loading);
  }

  getContainers(): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.Baseurl}/containers`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getTemplates(): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.Baseurl}/templates`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getContainerbyId(containerID: string): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.Baseurl}/containers/${containerID}`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getTemplateById(templateId: string): Observable<any> {
    this.setLoading(true);
    return this.http.get<any>(`${this.Baseurl}/templates/${templateId}`).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  updateContainer(container: Container) {
    this.setLoading(true);
    return this.http.put<Container>(`${this.Baseurl}/containers/${container.id}`, container).pipe(
      finalize(() => this.setLoading(false))
    );
  }

  selectTemplate(template: Template) {
    this.templateSource.next(template);
  }

  postTemplate(template: Template) {
    this.setLoading(true);
    return this.http.post<Template>(`${this.Baseurl}/templates`, template).pipe(
      finalize(() => this.setLoading(false))
    );
  }
}