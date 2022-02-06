import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RivetLineChartComponent } from './rivet-line-chart.component';
import { RivetTokenModule } from 'src/rivet-token/rivet-token.module';



@NgModule({
  declarations: [
    RivetLineChartComponent
  ],
  imports: [
    CommonModule,
    RivetTokenModule
  ],
  exports: [
    RivetLineChartComponent
  ]
})
export class RivetLineChartModule { }
