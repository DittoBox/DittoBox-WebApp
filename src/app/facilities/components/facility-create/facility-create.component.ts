import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FacilityServiceService } from '../../service/facility-service.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-facility',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css'],
  standalone: true,
  imports: [MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule]
})
export class FacilityCreateComponent {
  @Output() facilityCreated = new EventEmitter<void>();
  createFacilityForm: FormGroup;

  constructor(
    private facilityService: FacilityServiceService,
    private fb: FormBuilder
  ) {
    this.createFacilityForm = this.fb.group({
      facilityType: [0, Validators.required], // Asigna 0 como valor predeterminado para "Restaurant"
      name: ['', Validators.required],
      location: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        address: ['', Validators.required],
        latitude: [0],
        longitude: [0],
        plusCode: ['']
      })
    });
  }

  onSubmit() {
    if (this.createFacilityForm.valid) {
      const formData = {
        ...this.createFacilityForm.value,
        accountId: localStorage.getItem('accountId')
      };

      this.facilityService.createGroup(formData).subscribe(
        () => {
          console.log('Facility creado exitosamente');
          this.facilityCreated.emit();
          this.createFacilityForm.reset({ facilityType: 0 }); // Restablece el tipo predeterminado a "Restaurant"
        },
        (error) => {
          console.error('Error al crear el facility:', error);
        }
      );
    }
  }

  cancel() {
    this.facilityCreated.emit(); // Emite el evento para cerrar el formulario sin crear
  }
}
