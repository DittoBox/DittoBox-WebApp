import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ContainerDetailsComponent} from "../../components/container-details/container-details.component";
import {ContainerServiceService} from "../../service/container-service.service";
import {TemplateItemComponent} from "../../components/template-item/template-item.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatCardTitle,
    TemplateItemComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent  {

}
