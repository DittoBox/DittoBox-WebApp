import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Account} from "../../../settings/model/account/account.entity";
import {Router} from "@angular/router";
import {AccountServiceService} from "../../service/account-service.service";

@Component({
  selector: 'app-register-owner-company-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register-owner-company-form.component.html',
  styleUrl: './register-owner-company-form.component.css'
})
export class RegisterOwnerCompanyFormComponent implements OnInit{
  account: Account = new Account();
  representativeId!: number;
  token!: string; // Variable para almacenar el token

  constructor(private accountService: AccountServiceService, private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.representativeId = navigation?.extras?.state?.['userId'];
    this.token = navigation?.extras?.state?.['token']; // Obtén el token del estado de navegación
  }

  createAccount() {
    if (this.representativeId && this.token) {
      this.account.representativeId = this.representativeId;
      this.accountService.createAccount(this.account, this.token).subscribe(
        response => {
          console.log('Account creado con éxito:', response);
          this.router.navigate(['/success-page']);
        },
        error => {
          console.error('Error al crear el Account:', error);
        }
      );
    } else {
      console.error('Error: representativeId o token no encontrado.');
    }
  }
}
