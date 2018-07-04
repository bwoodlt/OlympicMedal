# Sainsbury's ReactJS Entry Test
Create a simple ReactJS application which searches for stores and displays results.

Please read through the test description below to fully understand what is required. All assets needed to complete this test are attached.

## Available assets
- JSON data from a fictional API
- Designs for 3 different viewports (Mobile first approach).
- Search icon SVG

**Additional Help**

Formatting for Store page URL:

*[store_name]* must be kebab-case (lowercased and hyphenated)
```code
https://stores.sainsburys.co.uk/[store_code]/[store_name]
```
**Font:**

Assume Arial font if the Sainsbury's font is unavailable.

## Requirements
- Proposed user stories are complete
- Code is unit tested
- ReactJS routing
- Feel free to use test framework of your choice along with coverage reports.
- Accessible via keyboard
- High contrast mode

## User acceptance criteria
Features below cover all user scenarios from data manipulation, simple functionality and also what is expected to be rendered in the client. For visual guidance please refer to attached designs.

### Routing
```gherkin
Feature: Application needs to provide basic routing and send all other requests to 404 page

    Scenario: Show not found page
        Given I enter a path in browser's address bar
            And path is not "/search"
            And path is not "/results"
        Then "404" page should be returned
            And page should display "Requested page not found"
```

### Data manipulation
```gherkin
Feature: Data coming from API needs to be updated for correct display in the client.

    Scenario: Format distance
        Given API provides "distance"
        When distance is rendered by client
        Then it needs to print as 'X.XX mi' format

    Scenario: Create store address
        Given API provides "store address"
            And API provides "city"
            And API provides "postcode"
        When store address is rendered in the client
        Then it needs to print out "[store address],\[city],\n[postcode]"

    Scenario: Format opening times
        Given API provides "opening times"
        When "opening times" is rendered in the client
        Then each time is to be printed as "[day]: [start_time] - [end_time]" format
```

### Search functionality
```gherkin
Feature: Users need to be able to search for area by postcode

    Scenario: Search page is displayed
        Given I want to search for stores on the website
         When I visit "/search" page
         Then I am presented with a search field and submit button

    Scenario: Search for area returns results
        Given search page is rendered
            And search field is present
            And submit button is present
        When I enter "EC1N 2HT" postcode to search field
            And I submit search query
        Then I am presented with "results" page showing ordered list of results

    Scenario: Search for an area for which there are no results
        Given search page is rendered
            And search field is present
            And submit button is present
        When I enter "SE1" to search field
            And I submit search query
        Then search page returns message "No results found"
            And search search field is shown
            And submit button is shown
```

### Clicking a result
```gherkin
Feature: Clicking a results needs to take me to a store page

    Scenario: Clicking a result
        Given a search was performed for "EC1N 2HT"
          And "results" page renders ordered list of results for given search term
        When I click Fetter Lane Local store
        Then I am taken to "https://stores.sainsburys.co.uk/4036/fetter-lane-local"
```

## High Contrast mode
```gherkin
Feature: All pages must have a high contrast mode

    Scenario: High contrast toggle is displayed on Search Page
        Given search page is rendered
          And I am not in High contrast mode
          And High contrast toggle is present
         When I click on High contrast toggle
         Then I am in High contrast mode


    Scenario: High contrast toggle disables high contrast mode
        Given search page is rendered
          And I am in High contrast mode
          And High contrast toggle is present
         When I click on High contrast toggle
         Then I am not in High contrast mode


Feature: High contrast mode must persist with refresh

    Scenario: Refresh while in high contrast mode
        Given search page is rendered
          And I am in High contrast mode
         When I refresh
         Then I am in High contrast mode
```

## Final notes
Make assumptions for anything not detailed in this readme or designs.

Placement of the high contrast toggle and the styling of high contrast mode is candidates choice.

Candidates who are short on time, we suggest focusing on the high contrast mode and submitting a functioning application which meets the acceptance criteria above.

Please attach any instructions required to run the application and tests.
Do not attach your `node_modules` or other generated directories.

Please let us know if you liked this test and how long it took you to complete. We hope you enjoy the challenge.
