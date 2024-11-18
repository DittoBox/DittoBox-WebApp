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
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

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
    MatSlideToggleModule,
    FormsModule,
    TranslateModule
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
    private snackBar: MatSnackBar,
    private http: HttpClient // Añade esta línea

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
          console.log('Loaded workers list:', this.workersList);
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
      console.log('Loaded worker:', this.worker);
      console.log('Worker role:', this.workerRole);
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
      const profileId = this.worker.id;
      const privilegeId = this.getPrivilegeId(privilege);
  
      console.log('Privilege:', privilege);
      console.log('Privilege ID:', privilegeId);
      console.log('Profile ID:', profileId);
      console.log('Is Checked:', isChecked);
  
      if (privilegeId === -1) {
        console.error('Invalid privilege:', privilege);
        return;
      }
  
      if (isChecked) {
        this.workerServiceService.grantPrivilege(profileId, privilegeId).subscribe(
          () => {
            console.log('Privilege granted successfully');
            if (this.worker) {
              this.worker.privileges.push(privilege);
              this.workerRole = this.getRoleBasedOnPrivileges(this.worker.privileges);
              console.log('Updated worker privileges:', this.worker.privileges);
              console.log('Updated worker role:', this.workerRole);
            }
          },
          (error) => {
            console.error('Error al asignar privilegio:', error);
          }
        );
      } else {
        this.workerServiceService.revokePrivilege(profileId, privilegeId).subscribe(
          () => {
            console.log('Privilege revoked successfully');
            if (this.worker) {
              this.worker.privileges = this.worker.privileges.filter(p => p !== privilege);
              this.workerRole = this.getRoleBasedOnPrivileges(this.worker.privileges);
              console.log('Updated worker privileges:', this.worker.privileges);
              console.log('Updated worker role:', this.workerRole);
            }
          },
          (error) => {
            console.error('Error al revocar privilegio:', error);
          }
        );
      }
    } else {
      console.log('Worker is null');
    }
  }
  
  getPrivilegeId(privilege: string): number {
    const privilegeMap: { [key: string]: number } = {
      'WorkerManagement': 0,
      'GroupManagement': 1,
      'AccountManagement': 2
    };
    return privilegeMap[privilege] !== undefined ? privilegeMap[privilege] : -1;
  }
}