import { Component, EventEmitter, Output } from '@angular/core';
import { FacilityServiceService } from '../../service/facility-service.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-create-facility',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule]
})
export class FacilityCreateComponent {
  @Output() facilityCreated = new EventEmitter<void>();
  createFacilityForm: FormGroup;

  constructor(
    private facilityService: FacilityServiceService,
    private fb: FormBuilder
  ) {
    // Obtener el accountId del localStorage
    const accountId = localStorage.getItem('accountId');

    this.createFacilityForm = this.fb.group({
      name: ['', Validators.required],
      facilityType: [0, Validators.required],
      containerCount: [0, Validators.required],
      profileCount: [0, Validators.required],
      location: this.fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        latitude: [0],
        longitude: [0],
        plusCode: ['']
      }),
      accountId: [accountId, Validators.required] // Asignamos el accountId obtenido
    });
  }

  onSubmit() {
    if (this.createFacilityForm.valid) {
      this.facilityService.createGroup(this.createFacilityForm.value).subscribe(
        () => {
          console.log('Facility creado exitosamente');
          this.facilityCreated.emit();
          this.createFacilityForm.reset();
        },
        (error) => {
          console.error('Error al crear el facility:', error);
        }
      );
    }
  }
}
