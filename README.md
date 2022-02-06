# RivetD3Timer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## D3 Timer Challenge

## Instructions ##

Develop a FE Angular app that renders a timer based slidshow of graphs in D3. The web app must present 2 charts using D3 - a line chart and a bar chart. Each chart must be displayed for 15 seconds. A timer must be displayed to the user that shows the amount of time before the chart will be changed. The app must keep switching between charts until the user stops the app.

You can use static data for rendering the charts. Design and styling of the application is up to your personal preference.

You will get bonus points if your app does not break server side rendering.

## Output ##

A web app that presents a simple timer based slideshow of graphs in D3.


Your solution will be evaluated based on the data structures and algorithms used, cleanliness of code (naming, organization, documentation, etc), overall design, and the tests developed.

Please reach out if you have any questions, we look forward to hearing from you!

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Design

Charts are developed as separate components and are invoked in the html all at once, the slideshow behavior is arrived only by using css, i.e the charts always are in the DOM.

### Elements

1. Chart presenter - Chart presenter is responsible for arranging the charts in a slideshow manner, i.e switching between them.
  - Receives the charts as its content children using a directive
  - Schedules a timer, makes it visible in the UI to indicate lapse of quantum seconds
  - Switches the content children templates, adds visible class to the active chart and marks all else as out of focus.
Principle behind:
2. Line chart / Bar chart component
  - Invokes a data service to load data
  - Renders the chart

## Reasoning

- Destruction and recreation of chart components every time seemed to be a costly process. Hence the templates are never destroyed once received
- The chart presenter solution enables scaleability to add n number of slides (charts) to the slideshow.
## Notes from the developer

Open items
- Testing - Have lost touch with testing using karma and jasmine, so involves a learning curve.
- Finesse in the chart - Due to limited command on D3 js, couldnt create pretty charts with elaborate details.
