import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTierItemComponent } from './current-tier-item.component';

describe('CurrentTierItemComponent', () => {
  let component: CurrentTierItemComponent;
  let fixture: ComponentFixture<CurrentTierItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTierItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
