import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import {Account} from "../../model/account/account.entity";
import {SettingServiceService} from "../../service/setting-service.service";


@Component({
  selector: 'app-account-information-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    TranslateModule,
    NgIf
  ],
  templateUrl: './account-information-item.component.html',
  styleUrl: './account-information-item.component.css'
})
export class AccountInformationItemComponent implements OnInit{

  @Input() validator!: boolean;

  accountId : number = Number(localStorage.getItem('accountId'));
  account !: Account;

  constructor(private settingService: SettingServiceService) {
  }

    ngOnInit(): void {
        this.loadAccountInformation(this.accountId);
    }

    loadAccountInformation(id: number) {
        this.settingService.getAccountById(id).subscribe((data : any) => {
          console.log(data);
            this.account = new Account(data.businessName, data.bussinessId);
            console.log(this.account)
        });
    }

}
