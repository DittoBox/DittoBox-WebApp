import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOwnerFormComponent } from './register-owner-form.component';

describe('RegisterOwnerFormComponent', () => {
  let component: RegisterOwnerFormComponent;
  let fixture: ComponentFixture<RegisterOwnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOwnerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOwnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
