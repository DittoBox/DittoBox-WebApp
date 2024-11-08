import { Component } from '@angular/core';
import {
  AccountInformationItemComponent
} from "../../components/account-information-item/account-information-item.component";
import {UserInformationItemComponent} from "../../components/user-information-item/user-information-item.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    AccountInformationItemComponent,
    UserInformationItemComponent,
    TranslateModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
