import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RivetChartPresenterComponent } from './rivet-chart-presenter.component';
import { RivetBarChartModule } from 'src/rivet-bar-chart/rivet-bar-chart.module';
import { RivetLineChartModule } from 'src/rivet-line-chart/rivet-line-chart.module';
import { RivetTemplateManagerModule } from 'src/rivet-template-manager/rivet-template-manager.module';
import { RivetTokenModule } from 'src/rivet-token/rivet-token.module';



@NgModule({
  declarations: [
    RivetChartPresenterComponent
  ],
  imports: [
    CommonModule,
    RivetBarChartModule,
    RivetLineChartModule,
    RivetTemplateManagerModule
  ],
  exports: [
    RivetChartPresenterComponent
  ]
})
export class RivetChartPresenterModule { }
