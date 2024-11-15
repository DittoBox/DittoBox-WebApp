import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {MatIcon} from "@angular/material/icon";
import {Template} from "../../model/template-model/template.entity";
import {TemplateDetailsComponent} from "../template-details/template-details.component";
import {MatDivider} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChangeDetectorRef } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';

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
        MatSlideToggleModule,
        MatFormField,
        MatInput,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatButton,
        MatSidenavContainer,
        MatSidenavContent,
        MatSidenav,
        FormsModule,
        NgIf,
        TranslateModule
    ],
  templateUrl: './template-item.component.html',
  styleUrl: './template-item.component.css'
})
export class TemplateItemComponent implements OnInit {
  templateItems: Template[] = [];
  filteredTemplates: Template[] = [];
  gasSwitch: boolean = false;

    gases : any[] = [
        { name: 'Oxygen', enabled: true, min: null, max: null },
        { name: 'Dioxide', enabled: true, min: null, max: null },
        { name: 'Ethylene', enabled: true, min: null, max: null },
        { name: 'Ammonia', enabled: true, min: null, max: null },
        { name: 'Sulfur Dioxide', enabled: true, min: null, max: null }
    ];


  constructor(private templateSidenav: TemplateDetailsComponent, private containerServiceService: ContainerServiceService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.containerServiceService.getTemplates().subscribe((data: any[]) => {
      this.templateItems = data;
      this.filteredTemplates = data;
      console.log(this.templateItems);
    });
  }

  getCategory(categoryNumber: number) {
      switch (categoryNumber) {
          case 0:
              return 'Produce';
          case 1:
              return 'Meats';
          case 2:
              return 'Animal Derived';
          case 3:
              return 'Processed Food';
          default:
              return 'Unknown';
      }
  }

  openTemplateDetails(template: Template) {
    this.containerServiceService.selectTemplate(template);
    this.templateSidenav.openSidenav();
  }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        this.filteredTemplates = this.templateItems.filter(template =>
            template.name.toLowerCase().includes(filterValue) ||
            this.getCategory(template.category).toLowerCase().includes(filterValue)
        );
        this.cdr.detectChanges();
    }


}
