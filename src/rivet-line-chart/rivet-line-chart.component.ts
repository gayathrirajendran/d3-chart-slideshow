import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { RivetTokenDirective } from 'src/rivet-token/rivet-token.directive';
import { DataServiceService } from 'src/rivet-services/data-service/data-service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rivet-line-chart',
  templateUrl: './rivet-line-chart.component.html',
  styleUrls: ['./rivet-line-chart.component.scss'],
  providers: [
    {
      provide: RivetTokenDirective,
      useExisting: RivetLineChartComponent
    }]
})
export class RivetLineChartComponent extends RivetTokenDirective implements AfterViewInit, OnDestroy {

  private svg: any;
  public data: { date: string; value: number }[] = [];
  private margin = 50;
  public width: number = 650;
  public height: number = 300;
  private x: any;
  private y: any;
  private line: d3Shape.Line<[number, number]> | undefined;
  public isLoading: boolean = false;
  @ViewChild('line')
  private hostEl!: ElementRef;
  private destroyer: Subject<void> = new Subject();

  constructor(
    private dataService: DataServiceService,
    public elRef: ElementRef) {
    super();
  }

  /**
   * Life cycle method that ensures the view element with identifier is available.
   */
  ngAfterViewInit(): void {
    this.dataService.getData('line').pipe(
      takeUntil(this.destroyer)
    ).subscribe({
      next: (res) => {
        this.createSvg();
        this.drawLineChart(res);
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error occurred in fetching data for line chart', err);
      }
    })
  }

  /**
   * Configures the SVG element
   */
  private createSvg(): void {
    this.svg = d3.select(this.hostEl.nativeElement)
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");

    // chart title
    this.svg
      .append("text")
      .text('Line chart showing temperature of Ooty on Jan 2, 2022')
      .attr("y", "0%")
      .attr("x", "40%")
      .style("fill", "#0000AA")
      .style("font-size", "1em")
      .style("font-weight", "bold")
      .attr("alignment-baseline", "middle")
      .attr("text-anchor", "middle")
  }

  /**
   * Execute the methods necessary to update the graph with
   * the data retrieved from the JSON file
   * @param obsData
   */
  public drawLineChart(res: any): void {

    this.data = res.map((item: any) => ({ date: new Date(item.date), value: item.value }));

    // Configuring line path
    this.configureXaxis();
    this.configureYaxis();

    // Create the line for the chart and add it
    this.drawLineAndPath();
  }

  /**
   * Configures the Y-axis based on the data values
   */
  private configureYaxis(): void {
    // range of data for Y-axis
    let yRange: any[] = d3Array.extent(this.data, (d: any) => d.value);
    // make the Y range one less than the smallest value
    // so we have space between the bottom-most part
    // of the line and the X-axis
    if (yRange && yRange.length > 1
      && yRange[0] !== yRange[yRange.length - 1]) {
      yRange[0] -= 1;
    }
    this.y = d3Scale.scaleLinear()
      .range([this.height, 0])
      .domain(yRange);

    // Add the Y-axis definition to the left part of the chart
    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y));

    // the Y-axis label
    this.svg.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "start")
      .attr("x", this.height / 4)
      .attr("y", 0)
      .attr("transform", "translate(-35, " + this.height + ") rotate(-90)")
      .text('Temperature in Celsius');

  }

  /**
   * Configures the X-axis based on the time series
   */
  private configureXaxis(): void {

    // x-axis scale showing data over a period of time
    this.x = d3Scale.scaleTime()
      .range([0, this.width])
      .domain(d3Array.extent(this.data, (d: any) => d.date) as Iterable<any>);

    // Add the X-axis definition to the bottom of the chart
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    // Adds x axis label
    this.svg.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", this.width / 2)
      .attr("y", this.height + 50)
      .text('Time');
  }

  /**
   * Configures and draws the line on the graph
   */
  private drawLineAndPath() {
    // Create a line based on the X and Y values (date and value)
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value));

    // Configure the line's look and data source
    this.svg.append('path')
      .datum(this.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", this.line);
  }

  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.complete();
    this.destroyer.unsubscribe();
    console.log('line destroyed');
  }

}

