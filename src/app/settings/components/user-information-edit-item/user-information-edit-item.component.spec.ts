import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationEditItemComponent } from './user-information-edit-item.component';

describe('UserInformationEditItemComponent', () => {
  let component: UserInformationEditItemComponent;
  let fixture: ComponentFixture<UserInformationEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformationEditItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
