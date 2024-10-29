import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerActions,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-notification-timefilter',
  standalone: true,
  imports: [
    MatFormField,
    MatDatepickerInput,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    FormsModule,
    MatButton,
    MatLabel,
    MatHint,
    MatDatepickerActions,
    MatSuffix
  ],
  templateUrl: './notification-timefilter.component.html',
  styleUrl: './notification-timefilter.component.css'
})
export class NotificationTimefilterComponent {
  selectedDate: Date | null = null;

  @Output() dateChange = new EventEmitter<Date | null>();

  onDateChange(event: any) {
    this.selectedDate = event.value; // Captura la fecha seleccionada
    this.dateChange.emit(this.selectedDate); // Emite la fecha seleccionada
  }
}
