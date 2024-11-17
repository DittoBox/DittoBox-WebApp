import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartWorkersByFacilityComponent } from './bar-chart-workers-by-facility.component';

describe('BarChartWorkersByFacilityComponent', () => {
  let component: BarChartWorkersByFacilityComponent;
  let fixture: ComponentFixture<BarChartWorkersByFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartWorkersByFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartWorkersByFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
