import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChartStatusContainerComponent } from './base-chart-status-container.component';

describe('BaseChartStatusContainerComponent', () => {
  let component: BaseChartStatusContainerComponent;
  let fixture: ComponentFixture<BaseChartStatusContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseChartStatusContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseChartStatusContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
