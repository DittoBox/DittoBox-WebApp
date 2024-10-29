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
    NotificationTimefilterComponent
  ],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.css'
})
export class NotificationItemComponent implements  OnInit{
  notifications: Notifications[] = [];
  filteredNotifications: Notifications[] = [];
  constructor(private notificationService: SettingServiceService) {}

  ngOnInit(): void {
    this.loadNotifications();

  }

  loadNotifications() {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data; // Asigna las notificaciones desde el servicio
      this.filteredNotifications = this.notifications; // Muestra todas las notificaciones inicialmente
    });

  }

  markAsViewed(notification: Notifications) {
    notification.viewed = true;
  }

  handleAction(notification: Notifications, event: Event) {
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
  }

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
}
