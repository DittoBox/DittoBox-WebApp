import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarErrorWrongParametresComponent } from './snackbar-error-wrong-parametres.component';

describe('SnackbarErrorWrongParametresComponent', () => {
  let component: SnackbarErrorWrongParametresComponent;
  let fixture: ComponentFixture<SnackbarErrorWrongParametresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarErrorWrongParametresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarErrorWrongParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
