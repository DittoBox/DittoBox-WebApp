import {Component, OnInit} from '@angular/core';
import {
  AccountInformationItemComponent
} from "../../components/account-information-item/account-information-item.component";
import {UserInformationItemComponent} from "../../components/user-information-item/user-information-item.component";
import {AccountServiceService} from "../../../account/service/account-service.service";
import {SettingServiceService} from "../../service/setting-service.service";
import {Profile} from "../../model/profile/profile";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    AccountInformationItemComponent,
    UserInformationItemComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{

        profile !: Profile;

      constructor(private settingsService: SettingServiceService) {

      }

      privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')
      workerValidator : boolean = this.privileges.includes('WorkerManagement');
      groupValidator : boolean = this.privileges.includes('GroupManagement');
      accountValidator : boolean = this.privileges.includes('AccountManagement');

        ngOnInit() {
            this.loadProfile();
        }

        loadProfile() {
            this.settingsService.getUserInformationById(Number(localStorage.getItem('userId'))).subscribe((data: any) => {
                this.settingsService.getProfileInformationById(Number(localStorage.getItem('profileId'))).subscribe((profile: any) => {
                    this.profile = new Profile(data.id, data.username, profile.firstName + profile.lastName);
                    console.log(this.profile);
                });
            });
        }
}
