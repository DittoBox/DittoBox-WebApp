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

@Component({
  selector: 'app-worker-details',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    NgForOf,
    MatSidenav,
    MatButton,
    MatSidenavContainer,
    NgIf,
    MatSidenavContent,
    MatButtonToggle,
    RouterLink,
    MatIcon,
    MatDivider,
    MatIconButton,
    MatDialogContainer,
    MatDialogContent,
  ],
  templateUrl: './worker-details.component.html',
  styleUrl: './worker-details.component.css'
})
export class WorkerDetailsComponent {
  worker: Worker | null = null;
  opened: boolean = false;

  constructor(private workerServiceService: WorkerServiceService, public dialog:MatDialog,private snackBar: MatSnackBar) { }

  loadWorker(workerId: number | undefined) {
    if (workerId === undefined || workerId === null) {
      console.error("workerId está indefinido o es nulo");
      return;
    }

    this.workerServiceService.getWorkerbyId(workerId.toString()).subscribe(
      (data) => {
        this.worker = new Worker(
          data.id,
          data.name,
          data.facility,
          data.location,
          data.rol,
          data.image
        );
        this.opened = true;
      },
      (error) => {
        console.error('Error al obtener el trabajador:', error);
      }
    );
  }


}
