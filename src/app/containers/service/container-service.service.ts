import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, forkJoin, Observable} from "rxjs";
import {Template} from "../model/template-model/template.entity";
import {Container} from "../model/container-model/container.entity";

@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {

  Baseurl: string = 'http://localhost:3000';

  // to manage the templates selection
  private templateSource = new BehaviorSubject<any>(null);
  templateSelected = this.templateSource.asObservable();

  constructor(private http: HttpClient) { }

  getContainers() : Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/containers`);
  }
  getTemplates() : Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/templates`);
  }
  getContainerbyId(containerID:string):Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/containers/${containerID}`);

  }
  getTemplateById(templateId: string): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/templates/${templateId}`);
  }

  updateContainer(container: Container) {
    return this.http.put<Container>(`${this.Baseurl}/containers/${container.id}`, container);
  }

  selectTemplate(template: Template) {
    this.templateSource.next(template);
  }

}
