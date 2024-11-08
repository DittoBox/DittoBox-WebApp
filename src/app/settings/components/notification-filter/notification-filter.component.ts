import {Component, EventEmitter,Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notification-filter',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatButton,
    TranslateModule

  ],
  templateUrl: './notification-filter.component.html',
  styleUrl: './notification-filter.component.css'
})
export class NotificationFilterComponent {
  @Output() filter = new EventEmitter<'alert' | 'warning' | 'update' | 'all'>();
}
