import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTimefilterComponent } from './notification-timefilter.component';

describe('NotificationTimefilterComponent', () => {
  let component: NotificationTimefilterComponent;
  let fixture: ComponentFixture<NotificationTimefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationTimefilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationTimefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
