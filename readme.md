# AMP code test submission - Angular 2 version

This is the Angular 2 version of my submission to the AMP code test.

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
    - Functional Typescript code to satisfy requirements.
- AngularJS
    - Appropriate use of Angular framework:
        - Component for the app.
        - Data injected via a constant.
        - Angular2 pipes used for filtering and sorting.
        - Angular2 event bindings used for responding to events.
- Automated testing of JavaScript
    - Unit tests not yet implemented in the Angular2 version.
- Git
    - Tried to keep commits small and focussed, with changes summarised in a descriptive commit message.
- Grunt or Gulp (we use gulp here)
    - Used Gulp rather than Grunt in this submission.

## Assumptions and Considerations

- There were some minor mistakes in the data, which I corrected manually. I assumed that, given the time-constraint, this would be preferred.
- I have not implemented minification or concatenation of Javascript.
- The solution was only tested in the latest version of Chrome (using Dev tools, to simulate different screen-sizes).
- I have set things up simply, with a single component. I opted not to go as far as breaking up the screen into multiple directives, as I didn't see that being necessary, given the limited scope of the exercise.
- Some additional testing and some cleanup remains to be done on the Angular2 version.

## Installation

1. `npm i -g grunt-cli bower`
2. Clone the solution and `cd` into the folder
3. `npm i`

## Running

### Running the solution

`npm start`