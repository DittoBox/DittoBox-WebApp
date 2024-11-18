import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCorrectParametresComponent } from './snackbar-correct-parametres.component';

describe('SnackbarCorrectParametresComponent', () => {
  let component: SnackbarCorrectParametresComponent;
  let fixture: ComponentFixture<SnackbarCorrectParametresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarCorrectParametresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarCorrectParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
