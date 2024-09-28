import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
