import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/user/user.entity";
import {AccountServiceService} from "../../service/account-service.service";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import {SnackbarService} from "../../../shared/service/snackbar.service";

@Component({
  selector: 'app-register-owner-form',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule
  ],
  templateUrl: './register-owner-form.component.html',
  styleUrl: './register-owner-form.component.css'
})
export class RegisterOwnerFormComponent {
  user: User = new User();

  constructor(private accountService: AccountServiceService, private router: Router, private snackbarservice: SnackbarService) {}

  registerOwner() {
    this.accountService.createUser(this.user).subscribe(
      response => {
        console.log('Owner registrado con éxito:', response);
        this.snackbarservice.showMessageCorrect('Owner registered successfully');
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
        this.snackbarservice.showMessageError('Parameters are required');
        console.error('Error al registrar el Owner:', error);
      }
    );
  }

}
