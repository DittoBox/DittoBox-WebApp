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
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

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
    MatButtonToggle,
    RouterLink,
    MatIcon,
    MatDivider,
    MatIconButton,
    MatDialogContainer,
    MatDialogContent,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './worker-details.component.html',
  styleUrl: './worker-details.component.css'
})
export class WorkerDetailsComponent {
  worker: Worker | null = null;
  workersList: Worker[] = [];
  workerRole: string = '';
  opened: boolean = false;

  constructor(
    private workerServiceService: WorkerServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.loadAllWorkers();
  }

  loadAllWorkers() {
    const accountId = localStorage.getItem('accountId');
    if (accountId) {
      this.workerServiceService.getWorkersByAccount(accountId).subscribe(
        (data: any[]) => {
          this.workersList = data.map((workerData: any) => new Worker(
            workerData.id,
            workerData.firstName,
            workerData.lastName,
            workerData.accountId,
            workerData.groupId,
            workerData.location,
            workerData.privileges
          ));
        },
        (error) => {
          console.error('Error al obtener los trabajadores:', error);
        }
      );
    }
  }

  loadWorker(workerId: string | number) {
    const id = typeof workerId === 'string' ? parseInt(workerId, 10) : workerId;
    this.worker = this.workersList.find(worker => worker.id === id) || null;
    if (this.worker) {
      this.workerRole = this.getRoleBasedOnPrivileges(this.worker.privileges);
    }
    this.opened = !!this.worker;
  }

  getRoleBasedOnPrivileges(privileges: string[]): string {
    const hasWorkerManagement = privileges.includes('WorkerManagement');
    const hasGroupManagement = privileges.includes('GroupManagement');
    const hasAccountManagement = privileges.includes('AccountManagement');

    if (hasWorkerManagement && hasGroupManagement && hasAccountManagement) {
      return 'Owner';
    } else if (hasWorkerManagement && hasGroupManagement) {
      return 'Manager';
    } else {
      return 'Worker';
    }
  }

  onPrivilegeToggle(privilege: string, isChecked: boolean) {
    if (this.worker) {
      if (isChecked) {
        if (!this.worker.privileges.includes(privilege)) {
          this.worker.privileges.push(privilege);
        }
      } else {
        this.worker.privileges = this.worker.privileges.filter(p => p !== privilege);
      }
      this.workerRole = this.getRoleBasedOnPrivileges(this.worker.privileges);
    }
  }

}
