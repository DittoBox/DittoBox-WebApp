import { Component } from '@angular/core';
import {NotificationItemComponent} from "../../components/notification-item/notification-item.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    NotificationItemComponent
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
