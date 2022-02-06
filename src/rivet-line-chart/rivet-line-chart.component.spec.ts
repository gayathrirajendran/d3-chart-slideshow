import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetLineChartComponent } from './rivet-line-chart.component';

describe('RivetLineChartComponent', () => {
  let component: RivetLineChartComponent;
  let fixture: ComponentFixture<RivetLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivetLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
