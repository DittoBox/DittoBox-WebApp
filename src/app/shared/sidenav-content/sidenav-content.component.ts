import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from "@angular/material/divider";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { LanguageDialogComponent } from '../language-dialog/language-dialog.component';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatIconModule,
    MatDivider,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    MatButtonModule
  ],
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent {
  // Servicios y dependencias
  translate: TranslateService = inject(TranslateService);
  dialog: MatDialog = inject(MatDialog);

  @Output() sidenavClose = new EventEmitter<void>();

  // Variables
  privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]');
  workerValidator: boolean = this.privileges.includes('WorkerManagement');
  groupValidator: boolean = this.privileges.includes('GroupManagement');
  accountValidator: boolean = this.privileges.includes('AccountManagement');

  currentLang: string = this.translate.currentLang || 'en';

  // Métodos
  closeSidenav() {
    this.sidenavClose.emit(); // Emite el evento para cerrar el sidenav
  }

  openLanguageDialog() {
    this.dialog.open(LanguageDialogComponent);
  }
}
