import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [MatSidenavModule, MatNavList, MatListItem],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.css'
})
export class SidenavContentComponent {

}
