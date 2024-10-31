import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInformationItemComponent } from './account-information-item.component';

describe('AccountInformationItemComponent', () => {
  let component: AccountInformationItemComponent;
  let fixture: ComponentFixture<AccountInformationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInformationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInformationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
