import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenav, MatNavList, MatListItem, MatSidenavContainer
  ],
  templateUrl: './toolbarContent.component.html',
  styleUrl: './toolbarContent.component.css'
})
export class ToolbarContentComponent {

}
