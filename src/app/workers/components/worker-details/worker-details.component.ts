import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {RouterLink} from "@angular/router";
import {MatDialog, MatDialogContainer, MatDialogContent} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Worker} from "../../model/wroker-model/worker";
import {WorkerServiceService} from "../../service/worker-service.service";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-worker-details',
  standalone: true,
  imports: [
    NgIf,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    TranslateModule,
  ],
  templateUrl: './worker-details.component.html',
  styleUrl: './worker-details.component.css'
})
export class WorkerDetailsComponent {
  worker: Worker | null = null;
  opened: boolean = false;

  constructor(private workerServiceService: WorkerServiceService, public dialog:MatDialog,private snackBar: MatSnackBar) { }

  loadWorker(workerId: number) {
    this.workerServiceService.getWorkerbyId(workerId.toString()).subscribe(data => {
      this.worker = new Worker(
        data.id,
        data.name,
        data.facility,
        data.location,
        data.rol,
        data.image
      );
      if (this.worker && this.worker.id) {
        this.workerServiceService.getWorkerbyId(this.worker.id).subscribe(WorkerData => {
          this.worker = new Worker(
            data.id,
            data.name,
            data.facility,
            data.location,
            data.rol,
            data.image
          );


          this.opened = true;
        }, error => {
          console.error('Error al obtener:', error);
        });
      } else {
        console.error('definido o worker es nulo');
      }

    }, error => {
      console.error('Error al obtener el worker:', error);
    });
  }

}
