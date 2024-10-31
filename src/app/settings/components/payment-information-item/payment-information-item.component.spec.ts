import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInformationItemComponent } from './payment-information-item.component';

describe('PaymentInformationItemComponent', () => {
  let component: PaymentInformationItemComponent;
  let fixture: ComponentFixture<PaymentInformationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInformationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInformationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
