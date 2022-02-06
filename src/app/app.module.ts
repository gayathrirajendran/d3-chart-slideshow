import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RivetBarChartModule } from 'src/rivet-bar-chart/rivet-bar-chart.module';
import { RivetChartPresenterModule } from 'src/rivet-chart-presenter/rivet-chart-presenter.module';
import { RivetLineChartModule } from 'src/rivet-line-chart/rivet-line-chart.module';
import { RivetTemplateManagerModule } from 'src/rivet-template-manager/rivet-template-manager.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RivetBarChartModule,
    RivetLineChartModule,
    RivetChartPresenterModule,
    RivetTemplateManagerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
