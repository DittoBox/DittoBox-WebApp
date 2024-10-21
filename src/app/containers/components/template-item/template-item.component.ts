import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {MatDialog} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {Template} from "../../model/template-model/template.entity";
import {TemplateDetailsComponent} from "../template-details/template-details.component";
import {MatDivider} from "@angular/material/divider";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ChangeDetectionStrategy } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-template-item',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        NgForOf,
        MatCardTitle,
        MatIcon,
        MatDivider,
        MatSlideToggle,
        MatFormField,
        MatInput,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ],
  templateUrl: './template-item.component.html',
  styleUrl: './template-item.component.css'
})
export class TemplateItemComponent implements OnInit {

  templateItems: Template[] = [];
  filteredTemplates: Template[] = [];

  constructor(private templateSidenav: TemplateDetailsComponent, private containerServiceService: ContainerServiceService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.containerServiceService.getTemplates().subscribe((data: any[]) => {
      this.templateItems = data;
      this.filteredTemplates = data;
    });
  }

  openTemplateDetails(template: Template) {
    this.containerServiceService.selectTemplate(template);
    this.templateSidenav.openSidenav();
  }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        this.filteredTemplates = this.templateItems.filter(template =>
            template.nameTemplate.toLowerCase().includes(filterValue) ||
            template.descriptionTemplate.toLowerCase().includes(filterValue)
        );
        this.cdr.detectChanges(); // Forzamos la detección de cambios
    }


}
