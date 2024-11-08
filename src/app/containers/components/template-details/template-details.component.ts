import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ContainerServiceService} from "../../service/container-service.service";
import {Template} from "../../model/template-model/template.entity";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-template-details',
  standalone: true,
  imports: [
    MatButton,
    MatDivider,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatSelectionList,
    FormsModule,
    MatListOption,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './template-details.component.html',
  styleUrl: './template-details.component.css'
})
export class TemplateDetailsComponent implements OnInit{

  template: any = null
  opened: boolean = false;
  containerItems: any[] = [];
    selectedContainers: any[] = [];

  constructor(private containerService: ContainerServiceService) { }

  ngOnInit() {
    this.containerService.templateSelected.subscribe(data => {
      this.template = data;
    });
    this.containerService.getContainers().subscribe((data: any[]) => {
      this.containerItems = data;
    });
  }

  openSidenav() {
    this.opened = true;
  }

  applyTemplateToContainers() {
    if (this.selectedContainers.length > 0) {
      console.log('Containers seleccionados:', this.selectedContainers);
      // Aquí implementará logica de copia de template a contenedor
    } else {
      console.warn('No se ha seleccionado ningún container.');
    }
  }

  protected readonly Template = Template;
}
