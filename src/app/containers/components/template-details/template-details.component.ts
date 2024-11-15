import {Component, OnInit, ViewChild} from '@angular/core';
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
import {MatDialog} from "@angular/material/dialog";

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

  @ViewChild('sidenav') sidenav !: MatSidenav;

  template: any = null
  opened: boolean = false;
  containerItems: any[] = [];
    selectedContainers: any[] = [];
    privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')

  constructor(private containerService: ContainerServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.containerService.templateSelected.subscribe(data => {
      this.template = data;
    });
    if (this.privileges.includes('AccountManagement')) {
      this.containerService.getContainersByAccountId(Number(localStorage.getItem("accountId"))).subscribe((data: any[]) => {
        this.containerItems = data;
      });
    }
    else {
        this.containerService.getContainersByGroupId(Number(localStorage.getItem("groupId"))).subscribe((data: any[]) => {
            this.containerItems = data;
        });
    }
  }

  openSidenav() {
    this.opened = true;
  }

  applyTemplateToContainers() {
    if (this.selectedContainers.length > 0) {
      console.log('Containers seleccionados:', this.selectedContainers);

      for (let container of this.selectedContainers) {
        this.containerService.assignTemplateToContainer(container.id, this.template.id).subscribe(data => {
          console.log('Template aplicado correctamente:', data);
        });
      }

      this.sidenav.close();

    } else {
      console.warn('No se ha seleccionado ningún container.');
    }
  }

  getCategory(categoryNumber: any) {
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

  protected readonly Template = Template;
}
