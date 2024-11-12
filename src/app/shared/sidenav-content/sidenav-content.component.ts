import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatDivider} from "@angular/material/divider";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, MatNavList, MatListItem, MatIconModule, MatDivider, RouterLink, RouterLinkActive],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent{

  @Output() sidenavClose = new EventEmitter<void>();
  privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')

  workerValidator : boolean = this.privileges.includes('WorkerManagement');
  groupValidator : boolean = this.privileges.includes('GroupManagement');
  accountValidator : boolean = this.privileges.includes('AccountManagement');

  closeSidenav() {
    this.sidenavClose.emit();  // Emite el evento para cerrar el sidenav
  }

}
