import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Account} from "../../../settings/model/account/account.entity";
import {Router} from "@angular/router";
import {AccountServiceService} from "../../service/account-service.service";
import { TranslateModule } from '@ngx-translate/core';
import {SnackbarService} from "../../../shared/service/snackbar.service";

@Component({
  selector: 'app-register-owner-company-form',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule
  ],
  templateUrl: './register-owner-company-form.component.html',
  styleUrl: './register-owner-company-form.component.css'
})
export class RegisterOwnerCompanyFormComponent implements OnInit{
  account: Account = new Account();
  representativeId!: number;
  token!: string;
  constructor(private accountService: AccountServiceService, private router: Router,private snackbarservice: SnackbarService) {}

  ngOnInit() {
    this.representativeId = Number(localStorage.getItem('userId'));
    this.token = localStorage.getItem('token') || '';

    if (!this.representativeId || !this.token) {
      console.error('Error: representativeId o token no encontrado.');
    } else {
      console.log('representativeId y token encontrados');
    }
  }

  createAccount(){
    if (this.representativeId && this.token) {
      this.account.representativeId = this.representativeId;
      this.accountService.createAccount(this.account, this.token).subscribe(
        response => {
          console.log('Account creado con éxito:', response);
          this.snackbarservice.showMessageCorrect('Account created successfully');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error al crear el Account:', error);
          this.snackbarservice.showMessageError('Parameters are required');
        }
      );
    } else {
      console.error('Error: representativeId o token no encontrado.');
    }
  }
}
