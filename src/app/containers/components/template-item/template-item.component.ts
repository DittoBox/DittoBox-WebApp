import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {ContainerServiceService} from "../../service/container-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-template-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatCardTitle
  ],
  templateUrl: './template-item.component.html',
  styleUrl: './template-item.component.css'
})
export class TemplateItemComponent implements OnInit {

  @Input() templateItems: any[] = [];


  constructor( private containerServiceService: ContainerServiceService,public dialog:MatDialog) { }
  ngOnInit() {
    this.containerServiceService.getTemplates().subscribe((data: any[]) => {
      this.templateItems = data;
    });
  }


}
