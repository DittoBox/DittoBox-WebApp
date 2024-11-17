import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartContainersByFacilityComponent } from './bar-chart-containers-by-facility.component';

describe('BarChartContainersByFacilityComponent', () => {
  let component: BarChartContainersByFacilityComponent;
  let fixture: ComponentFixture<BarChartContainersByFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartContainersByFacilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartContainersByFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
