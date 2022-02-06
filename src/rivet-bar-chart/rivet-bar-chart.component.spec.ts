import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetBarChartComponent } from './rivet-bar-chart.component';

describe('RivetBarChartComponent', () => {
  let component: RivetBarChartComponent;
  let fixture: ComponentFixture<RivetBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivetBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
