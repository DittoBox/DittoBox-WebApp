import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { NgForOf } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from "@angular/material/button";
import { Facility } from '../../model/facility-model/facility.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-facility-items',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    NgForOf,
    MatIconModule,
    MatButton,
    TranslateModule
  ],
  templateUrl: './facility-items.component.html',
  styleUrl: './facility-items.component.css'
})
export class FacilityItemsComponent {
  @Input() facilityItems: Facility[] = [];
  @Output() facilitySelected = new EventEmitter<number>();

  openFacilitySidenav(facilityId: number) {
    this.facilitySelected.emit(facilityId);
  }
}
