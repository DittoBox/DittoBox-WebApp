import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacilityServiceService } from '../../service/facility-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

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
    this.createFacilityForm = this.fb.group({
      name: ['', Validators.required],
      facilityType: ['', Validators.required],
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
      accountId: [1]  // Ajusta esto según sea necesario
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
