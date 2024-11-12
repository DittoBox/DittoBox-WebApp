import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContainer,
  MatDialogContent,
  MatDialogModule, MatDialogRef
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {ContainerServiceService} from "../../service/container-service.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-contianer-edit',
  standalone: true,
  imports: [
    MatDialogContainer,
    MatDialogContent,
    MatDialogModule,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatHint,
    MatCardActions,
    MatSlideToggle,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './contianer-edit.component.html',
  styleUrl: './contianer-edit.component.css'
})
export class ContianerEditComponent implements OnInit{

  gases: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<ContianerEditComponent>,
              private containerService: ContainerServiceService ) {}

  ngOnInit() {
    this.initializeGases()
  }

  initializeGases() {
    this.gases = [
      {name: 'Oxygen', min: this.data.oxygenMin, max: this.data.oxygenMax, enabled: false},
      {name: 'Dioxide', min: this.data.dioxideMin, max: this.data.dioxideMax, enabled: false},
      {name: 'Ethylene', min: this.data.ethyleneMin, max: this.data.ethyleneMax, enabled: false},
      {name: 'Ammonia', min: this.data.ammoniaMin, max: this.data.ammoniaMax, enabled: false},
      {name: 'Sulfur dioxide', min: this.data.sulfurDioxideMin, max: this.data.sulfurDioxideMax, enabled: false}
    ];

    this.gases.forEach(gas => {
      gas.enabled = gas.max !== 0 && gas.max !== null;
    });
  }

  toggleGas(gas: any) {
    if (!gas.enabled) {
      gas.min = 0;
      gas.max = 0;
    }
  }


  saveChanges() {

    this.gases.forEach(gas => {
      this.data[`${gas.name.toLowerCase()}Min`] = gas.min;
      this.data[`${gas.name.toLowerCase()}Max`] = gas.max;
    });

    const parameters = {
      minTemp: this.data.minTemp,
      maxTemp: this.data.maxTemp,
      minHumidity: this.data.minHumidity,
      maxHumidity: this.data.maxHumidity,
      oxygenMin: this.data.oxygenMin,
      oxygenMax: this.data.oxygenMax,
      dioxideMin: this.data.dioxideMin,
      dioxideMax: this.data.dioxideMax,
      ethyleneMin: this.data.ethyleneMin,
      ethyleneMax: this.data.ethyleneMax,
      ammoniaMin: this.data.ammoniaMin,
      ammoniaMax: this.data.ammoniaMax,
      sulfurDioxideMin: this.data.sulfurDioxideMin,
      sulfurDioxideMax: this.data.sulfurDioxideMax
    };

    this.containerService.updateContainerParameters(this.data.id, parameters).subscribe(
      (response) => {
        console.log('Template updated successfully', response);
        this.dialogRef.close(response);
      },
      (error) => {
        console.error('Error updating template', error);
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
