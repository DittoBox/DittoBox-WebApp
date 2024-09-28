import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css',

})
export class ToolbarContentComponent {

}
