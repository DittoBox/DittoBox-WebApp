import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {Template} from "../model/template-model/template.entity";

@Injectable({
  providedIn: 'root'
})
export class ContainerServiceService {

  Baseurl: string = 'https://my-json-server.typicode.com/DittoBox/DittoboxFakeApi';

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

  updateTemplate(template: Template): Observable<Template> {
    return this.http.put<Template>(`${this.Baseurl}/templates/${template.id}`, template);
  }

}
