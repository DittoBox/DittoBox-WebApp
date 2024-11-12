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
      (createdUser: any) => {
        console.log('User creado con éxito:', createdUser);
        this.router.navigate(['/register-company'], { state: { userId: createdUser.id } });
      },
      error => {
        console.error('Error al crear el User:', error);
      }
    );
  }
}
