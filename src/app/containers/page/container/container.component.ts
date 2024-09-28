import {Component, ViewChild} from '@angular/core';
import {ContainerDetailsComponent} from "../../components/container-details/container-details.component";
import {ContainerItemComponent} from "../../components/container-item/container-item.component";
import {ContainerTabComponent} from "../../components/container-tab/container-tab.component";
import {ToolbarContentComponent} from "../../../shared/toolbar-content/toolbarContent.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ContainerDetailsComponent,
    ContainerItemComponent,
    ContainerTabComponent,
    ToolbarContentComponent,
    MatToolbar,
    MatIcon,
    MatSidenavModule
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
