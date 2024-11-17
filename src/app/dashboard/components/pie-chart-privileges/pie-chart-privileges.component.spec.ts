import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPrivilegesComponent } from './pie-chart-privileges.component';

describe('PieChartPrivilegesComponent', () => {
  let component: PieChartPrivilegesComponent;
  let fixture: ComponentFixture<PieChartPrivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartPrivilegesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
