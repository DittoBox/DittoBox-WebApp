import { Component } from '@angular/core';
import {ContainerDetailsComponent} from "../../components/container-details/container-details.component";
import {ContainerItemComponent} from "../../components/container-item/container-item.component";
import {ContainerTabComponent} from "../../components/container-tab/container-tab.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ContainerDetailsComponent,
    ContainerItemComponent,
    ContainerTabComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
