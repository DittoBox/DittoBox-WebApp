import {Component, Input, OnInit} from '@angular/core';
import {NotificationFilterComponent} from "../notification-filter/notification-filter.component";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {SettingServiceService} from "../../service/setting-service.service";
import {Notifications} from "../../model/notifications/notification.entity";
import {NotificationTimefilterComponent} from "../notification-timefilter/notification-timefilter.component";
import { TranslateModule } from '@ngx-translate/core';
import {ContainerServiceService} from "../../../containers/service/container-service.service";

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [
    NotificationFilterComponent,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatIcon,
    NgClass,
    NgIf,
    MatButton,
    MatCardActions,
    MatCardContent,
    NgForOf,
    DatePipe,
    MatCardSubtitle,
    NotificationTimefilterComponent,
    TranslateModule
  ],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.css'
})
export class NotificationItemComponent implements  OnInit {
  notifications: Notifications[] = [];
  notification !: any;
  filteredNotifications: Notifications[] = [];
  privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]');
  accountValidator: boolean = this.privileges.includes('AccountManagement');

  constructor(private notificationService: SettingServiceService, private containerService: ContainerServiceService) {
  }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    if (this.accountValidator) {
      this.notificationService.getNotificationsByAccount(Number(localStorage.getItem("accountId"))).subscribe(data => {
        for (let notification of data) {
          this.containerService.getContainerbyId(notification.containerId).subscribe(container => {
            this.notifications.push(new Notifications(notification.alertType, notification.issuedAt, notification.accountId, notification.groupId, container.name));
          });
        }
      });
    }
    else {
        this.notificationService.getNotificationsByGroup(Number(localStorage.getItem("groupId"))).subscribe(data => {
            for (let notification of data) {
            this.containerService.getContainerbyId(notification.containerId).subscribe(container => {
                this.notifications.push(new Notifications(notification.alertType, notification.issuedAt, notification.accountId, notification.groupId, container.name));
            });
            }
    });
  }}

  getNotificationType(notification: Notifications): string {
    return this.notificationService.getNotificationTitle(notification);
  }

  getNotificationDescription(notification: Notifications): string {
      return this.notificationService.getNotificationInfo(notification, notification.containerName);
  }

  /* markAsViewed(notification: Notifications) {
    notification.viewed = true;
  } */

  /* handleAction(notification: Notifications, event: Event) {
    event.stopPropagation(); // Evita marcar la notificación como vista al hacer clic en el botón
    console.log(`Ejecutando acción: ${notification.action}`);
  }

  dismiss(notification: Notifications, event: Event) {
    event.stopPropagation(); // Evita marcar la notificación como vista
    this.notifications = this.notifications.filter(n => n !== notification);
  }
  filterNotifications(type: 'alert' | 'warning' | 'update' | 'all') {

    if (type === 'all') {
      this.filteredNotifications = this.notifications; // Mostrar todas las notificaciones
    } else {
      this.filteredNotifications = this.notifications.filter(notification => notification.type === type);
    }
    /*
  }*/

  /*
  onDateChange(selectedDate: Date | null) {
    if (selectedDate) {
      // Convertir la fecha seleccionada a una cadena en formato YYYY-MM-DD
      const selectedDateStr = selectedDate.toISOString().split('T')[0];

      this.filteredNotifications = this.notifications.filter(notification => {
        // Convertir la fecha de la notificación a una cadena en formato YYYY-MM-DD
        const notificationDateStr = new Date(notification.date).toISOString().split('T')[0];
        // Comparar solo la parte de la fecha
        return notificationDateStr === selectedDateStr;
      });
    } else {
      this.filteredNotifications = this.notifications; // Si no hay fecha, muestra todas
    }
  }
  */
}
