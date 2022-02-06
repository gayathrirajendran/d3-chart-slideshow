import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/rivet-services/data-service/data-service.service';
import { RivetTokenDirective } from 'src/rivet-token/rivet-token.directive';

export interface FrameworkHitModel {
  Framework: string;
  Stars: string;
}
@Component({
  selector: 'app-rivet-bar-chart',
  templateUrl: './rivet-bar-chart.component.html',
  styleUrls: ['./rivet-bar-chart.component.scss'],
  providers: [{
    provide: RivetTokenDirective,
    useExisting: RivetBarChartComponent
  }]
})
export class RivetBarChartComponent extends RivetTokenDirective implements AfterViewInit, OnDestroy {

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private subscription: Subscription = new Subscription();
  @ViewChild('bar')
  private hostEl!: ElementRef;
  public isLoading: boolean = true;
  private xAxisBarData: 'Framework' = 'Framework';
  private yAxisBarData = 'Stars';
  constructor(
    private dataService: DataServiceService
  ) { super(); }

  ngAfterViewInit(): void {
    this.subscription = this.dataService.getData('bar').pipe().subscribe({
      next: (res: FrameworkHitModel[]) => {
        this.isLoading = false;
        this.createSvg();
        this.drawBars(res);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error occurred in fetching data for bar chart', err);
      }
    })
  }

  /**
   * Configures the svg
   */
  private createSvg(): any {
    this.svg = d3.select(this.hostEl.nativeElement)
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

    // Chart title
    this.svg
      .append("text")
      .text('Bar chart showing stars for every framework')
      .attr("y", "0%")
      .attr("x", "40%")
      .style("fill", "#0000AA")
      .style("font-size", "1em")
      .style("font-weight", "bold")
      .attr("alignment-baseline", "middle")
      .attr("text-anchor", "middle")
  }

  /**
   * Configures the axes and the bars for the chart.
   * @param data data received
   *
   */
  private drawBars(data: FrameworkHitModel[]): void {

    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d[this.xAxisBarData]))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))

    // Adds x axis labels
    this.svg.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", this.width / 2)
      .attr("y", this.height + 50)
      .text(this.xAxisBarData);

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Draw the Y-axis label
    this.svg.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "start")
      .attr("x", this.height / 4)
      .attr("y", 0)
      .attr("transform", "translate(-40, " + this.height + ") rotate(-90)")
      .text(this.yAxisBarData);

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d[this.xAxisBarData]))
      .attr("y", (d: any) => y(d[this.yAxisBarData]))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d[this.yAxisBarData]))
      .attr("fill", "#d04a35");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('bar destroyed');
  }

}
