import { Component } from '@angular/core';
import {RegisterTabComponent} from "../../components/register-tab/register-tab.component";
import {RegisterWorkerFormComponent} from "../../components/register-worker-form/register-worker-form.component";
import {NgIf} from "@angular/common";
import {RegisterOwnerFormComponent} from "../../components/register-owner-form/register-owner-form.component";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterTabComponent,
    RegisterWorkerFormComponent,
    NgIf,
    RegisterOwnerFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  activeTab: 'worker' | 'owner' = 'worker';

  onTabChanged(event: 'worker' | 'owner') {
    this.activeTab = event;
  }

}
