import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOwnerCompanyFormComponent } from './register-owner-company-form.component';

describe('RegisterOwnerCompanyFormComponent', () => {
  let component: RegisterOwnerCompanyFormComponent;
  let fixture: ComponentFixture<RegisterOwnerCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOwnerCompanyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOwnerCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
