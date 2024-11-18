import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatDivider} from "@angular/material/divider";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageDialogComponent } from '../language-dialog/language-dialog.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, MatNavList, MatListItem, MatIconModule, MatDivider, RouterLink, RouterLinkActive, TranslateModule, NgIf],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {
  translate: TranslateService = inject(TranslateService);
  dialog: MatDialog = inject(MatDialog);
  constructor(private router: Router) {}

  @Output() sidenavClose = new EventEmitter<void>();
  privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')

  workerValidator: boolean = this.privileges.includes('WorkerManagement');
  groupValidator: boolean = this.privileges.includes('GroupManagement');
  accountValidator: boolean = this.privileges.includes('AccountManagement');
  allPrivileges: boolean = this.workerValidator && this.groupValidator && this.accountValidator;

  closeSidenav() {
    this.sidenavClose.emit();  // Emite el evento para cerrar el sidenav
  }
  openLanguageDialog() {
    this.dialog.open(LanguageDialogComponent);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}