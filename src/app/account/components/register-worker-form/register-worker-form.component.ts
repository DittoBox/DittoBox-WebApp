import { Component } from '@angular/core';
import {User} from "../../model/user/user.entity";
import {AccountServiceService} from "../../service/account-service.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import {SnackbarService} from "../../../shared/service/snackbar.service";

@Component({
  selector: 'app-register-worker-form',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule
  ],
  templateUrl: './register-worker-form.component.html',
  styleUrl: './register-worker-form.component.css'
})
export class RegisterWorkerFormComponent {
  user: User = new User();

  constructor(private accountService: AccountServiceService, private router: Router,private snackbarservice:SnackbarService) {}

  registerWorker() {
    this.accountService.createUser(this.user).subscribe(
      response => {
        console.log('Worker registrado con éxito:', response);
        this.snackbarservice.showMessageCorrect('Worker registered successfully');
        this.accountService.login(this.user.email,this.user.password).subscribe(
          response => {
            this.router.navigate(['/containers']);
          },
          error =>{
            console.error('F', error);
          }
        )
      },
      error => {
        this.snackbarservice.showMessageError('Parameters are required');
        console.error('Error al registrar el Worker:', error);
      }
    );
  }
}
