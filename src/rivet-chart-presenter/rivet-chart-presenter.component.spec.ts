import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivetChartPresenterComponent } from './rivet-chart-presenter.component';

describe('RivetChartPresenterComponent', () => {
  let component: RivetChartPresenterComponent;
  let fixture: ComponentFixture<RivetChartPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivetChartPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivetChartPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
