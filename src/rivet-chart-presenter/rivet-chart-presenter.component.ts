import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RivetTemplateDirective } from 'src/rivet-template-manager/rivet-template.directive';

@Component({
  selector: 'app-rivet-chart-presenter',
  templateUrl: './rivet-chart-presenter.component.html',
  styleUrls: ['./rivet-chart-presenter.component.scss']
})
export class RivetChartPresenterComponent implements AfterContentInit {

  @Input() switchChartTimer: number = 5;
  @ContentChildren(RivetTemplateDirective) templates: QueryList<RivetTemplateDirective> | undefined;

  public interval: any;
  private selectedIndex = 0;

  public timer = this.switchChartTimer;

  ngAfterContentInit() {
    this.switchTemplates();
    this.initTimer();
  }

  public stopTimer(): void {
    this.timer = -1;
    clearInterval(this.interval);
  }

  private initTimer() {
    if (this.timer > 1) {
      --this.timer;
    } else {
      this.timer = this.switchChartTimer;
      this.selectedIndex = (this.selectedIndex < this.templates!.length - 1) ? this.selectedIndex + 1 : 0;
      this.switchTemplates();
    }
    this.interval = setTimeout(this.initTimer.bind(this), 1000); // callback
  }

  private switchTemplates(): void {
    this.templates?.toArray().forEach((template, index) => {
      template.classList = index === this.selectedIndex ? 'visible' : 'hidden';
    });
  }

}
