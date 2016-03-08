# AMP code test submission

This is my submission to the AMP code test.

## Skills

I have attempted to demonstrate my skills in:

- Responsive design
  - "People" tiles are responsive, using Bootstrap grid system.
  - "Sort" button is also responsive, using Bootstrap.
- Sass / css
  - Styling is extremely minimal, using Sass variables for configuration, rather than re-styling.
- Semantics
  - Descriptive class names on key elements and textual alternatives for non-text elements.
- Accessibility
  - Use of labels, for form fields.
  - Textual alternatives for non-text elements.
- JavaScript
  - Clean, minimal Javascript code to satisfy requirements.
- AngularJS
  - Appropriate use of Angular framework:
    - Controller for controlling data flow.
    - View and angular directives and filters for filtering, sorting and displaying data.
    - Angular mocks and utilities for testing.
- Automated testing of JavaScript
  - Unit testing where possible.
  - Minimal e2e testing, where required. (See Assumptions & Considerations below.)
- Git
  - Tried to keep commits small and focussed, with changes summarised in a descriptive commit message.
- Grunt or Gulp (we use gulp here)
  - Used Grunt as already configured, with some minor modifications.

## Assumptions and Considerations

- There were some minor mistakes in the data, which I corrected manually. I assumed that, given the time-constraint, this would be preferred.
- I have not implemented minification or concatenation of Javascript.
- The solution was only tested in the latest version of Chrome (using Dev tools, to simulate different screen-sizes).
- As the filtering and sorting is done with built-in Angular directives (which I believe is the simple, effective, minimal way of doing it in this scenario) I didn't think unit-tests would be possible or appropriate. So I've tested those features using two simple e2e tests.
- I have set things up simply, with a single index page / view and controller. I opted not to go as far as breaking up the screen into directives, as I didn't see that being necessary, given the limited scope of the exercise.

## Installation

1. Clone the solution and `cd` into the folder
2. `npm i`
3. `bower i`
4. `npm i -g lite-server`
4. `npm i -g protractor` (if you wish to run e2e tests)
5. `grunt`
6. `npm start`

## Running

### Running the solution

`npm start`

### Running the unit tests

`npm test`

### Running the end-to-end tests

`npm e2e`