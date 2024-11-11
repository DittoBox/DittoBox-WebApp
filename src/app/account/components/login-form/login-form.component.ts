import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {AccountServiceService} from "../../service/account-service.service";
import {FormsModule} from "@angular/forms";

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
    FormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private accountService: AccountServiceService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      console.error('Username y password son requeridos');
      return;
    }

    // Llamar al método de login del servicio
    this.accountService.login(this.email, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        // Almacena el token o realiza alguna acción con el response
        this.router.navigate(['/containers']); // Redirige a la página deseada
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
}
