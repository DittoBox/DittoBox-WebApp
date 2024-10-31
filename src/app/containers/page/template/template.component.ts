import { Component } from '@angular/core';
import {TemplateItemComponent} from "../../components/template-item/template-item.component";
import {TemplateDetailsComponent} from "../../components/template-details/template-details.component";

@Component({
  selector: 'app-template',
  standalone: true,
    imports: [
        TemplateItemComponent,
        TemplateDetailsComponent
    ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

}
