import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/user/user.entity";
import {AccountServiceService} from "../../service/account-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register-owner-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register-owner-form.component.html',
  styleUrl: './register-owner-form.component.css'
})
export class RegisterOwnerFormComponent {
  user: User = new User();

  constructor(private accountService: AccountServiceService, private router: Router) {}

  registerOwner() {
    this.accountService.createUser(this.user).subscribe(
      response => {
        console.log('Worker registrado con éxito:', response);
        this.accountService.login(this.user.email, this.user.password).subscribe(
          loginResponse => {
            this.router.navigate(['/register-company']);
          },
          error => {
            console.error('Error al iniciar sesión:', error);
          }
        );
      },
      error => {
        console.error('Error al registrar el Owner:', error);
      }
    );
  }

}
