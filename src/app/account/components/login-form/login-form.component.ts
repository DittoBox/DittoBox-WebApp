import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {AccountServiceService} from "../../service/account-service.service";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import {SnackbarService} from "../../../shared/service/snackbar.service";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatCard,
    MatFormField,
    MatButton,
    MatInput,
    MatLabel,
    RouterLink,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private accountService: AccountServiceService, private router: Router,private snackbarService: SnackbarService) {}

  login() {
    if (!this.email || !this.password) {
      console.error('Username y password son requeridos');
      this.snackbarService.showMessageError('Username and password are required');
      return;
    }

    // Llamar al método de login del servicio
    this.accountService.login(this.email, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        this.snackbarService.showMessageCorrect('Login successful');
        this.router.navigate(['/containers']);
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
        this.snackbarService.showMessageError('Wrong username or password');
      }
    );
  }
}
