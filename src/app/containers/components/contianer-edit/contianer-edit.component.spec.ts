import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContianerEditComponent } from './contianer-edit.component';

describe('ContianerEditComponent', () => {
  let component: ContianerEditComponent;
  let fixture: ComponentFixture<ContianerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContianerEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContianerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
