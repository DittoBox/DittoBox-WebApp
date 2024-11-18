import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatDialog} from "@angular/material/dialog";
import {UserInformationEditItemComponent} from "../user-information-edit-item/user-information-edit-item.component";
import { TranslateModule } from '@ngx-translate/core';
import {SettingServiceService} from "../../service/setting-service.service";
import {User} from "../../../account/model/user/user.entity";
import {NgIf} from "@angular/common";
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';

@Component({
  selector: 'app-user-information-item',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardTitle,
        TranslateModule,
        NgIf
    ],
  templateUrl: './user-information-item.component.html',
  styleUrl: './user-information-item.component.css'
})
export class UserInformationItemComponent implements OnInit{

    id !: number;
    user !: User;

  constructor(private dialog: MatDialog, private settingService: SettingServiceService) {}

    ngOnInit(): void {
        this.id = Number(localStorage.getItem('userId'));
        this.loadUserInformation(this.id);
    }

    loadUserInformation(id: number) {
        this.settingService.getUserById(id).subscribe((data) => {
            this.settingService.getProfileById(id).subscribe((profile) => {
                this.user = new User(profile.firstName, profile.lastName, data.username)
            });
        });
    }

  openEditDialog() {
    const dialogRef = this.dialog.open(UserInformationEditItemComponent, {
      data: {
        username: 'A warm place',
        name: 'Advance',
        idNumber: '20124578963',
        bankOwner: 'Sofía Pérez'
      },
      position: { right: '0' },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with data:', result);
      }
    });
  }
  openChangePasswordModal() {
    const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((newPassword) => {
      if (newPassword) {
        this.settingService.changePassword(this.id, {
          userId: this.id,
          newPassword: newPassword
        }).subscribe();
      }
    });
  }


}
