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
  newTemplate: Template = new Template(
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
  );
  isNewTemplateSidenavOpened = false;
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
            template.category.toLowerCase().includes(filterValue)
        );
        this.cdr.detectChanges();
    }

    openNewTemplateSidenav(sidenav: MatSidenav): void {
      this.isNewTemplateSidenavOpened = true;
      sidenav.open();
    }

    saveTemplate(): void {
      // value mapping -> if "enabled" is true and min/max are null, set them to 0
      this.newTemplate.id = (this.templateItems.length + 1).toString();
      this.newTemplate.oxygenMin = this.gases[0].enabled?this.gases[0].min??0 : 0;
        this.newTemplate.oxygenMax = this.gases[0].enabled?this.gases[0].max??0 : 0;
        this.newTemplate.dioxideMin = this.gases[1].enabled?this.gases[1].min??0 : 0;
        this.newTemplate.dioxideMax = this.gases[1].enabled?this.gases[1].max??0 : 0;
        this.newTemplate.ethyleneMin = this.gases[2].enabled?this.gases[2].min??0 : 0;
        this.newTemplate.ethyleneMax = this.gases[2].enabled?this.gases[2].max??0 : 0;
        this.newTemplate.ammoniaMin = this.gases[3].enabled?this.gases[3].min??0 : 0;
        this.newTemplate.ammoniaMax = this.gases[3].enabled?this.gases[3].max??0 : 0;
        this.newTemplate.sulfurDioxideMin = this.gases[4].enabled?this.gases[4].min??0 : 0;
        this.newTemplate.sulfurDioxideMax = this.gases[4].enabled?this.gases[4].max??0 : 0;

        // save template
        this.templateItems.push(this.newTemplate);
        this.filteredTemplates = [...this.templateItems];
        this.containerServiceService.postTemplate(this.newTemplate).subscribe();
        this.newTemplate = new Template(
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ); // Limpia el formulario
        this.isNewTemplateSidenavOpened = false;
    }


}
