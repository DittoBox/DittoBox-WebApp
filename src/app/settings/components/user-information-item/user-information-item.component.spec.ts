import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationItemComponent } from './user-information-item.component';

describe('UserInformationItemComponent', () => {
  let component: UserInformationItemComponent;
  let fixture: ComponentFixture<UserInformationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
