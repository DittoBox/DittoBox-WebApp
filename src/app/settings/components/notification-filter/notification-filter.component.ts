import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {Notifications} from "../../model/notifications/notification.entity";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notification-filter',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
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
