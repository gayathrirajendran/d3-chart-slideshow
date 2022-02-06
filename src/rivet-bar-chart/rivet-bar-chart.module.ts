import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RivetBarChartComponent } from './rivet-bar-chart.component';
import { RivetTokenModule } from 'src/rivet-token/rivet-token.module';



@NgModule({
  declarations: [
    RivetBarChartComponent
  ],
  imports: [
    CommonModule,
    RivetTokenModule
  ],
  exports: [
    RivetBarChartComponent
  ]
})
export class RivetBarChartModule { }
