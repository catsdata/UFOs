# UFOs

<details><summary>Table of Contents</summary>
<p>

1. [Overview](https://github.com/catsdata/UFOs#overview)
2. [Resources](https://github.com/catsdata/UFOs#resources)
3. [Results](https://github.com/catsdata/UFOs#results)
4. [Summary](https://github.com/catsdata/UFOs#summary)

</p>
</details>

## Overview

Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.

## Resources

- Data Source:
  - [data.js](https://github.com/catsdata/UFOs/blob/main/static/js/data.js)
- Software:
  - VS Code
  - JavaScript
  - HTML
  - Bootstrap
  - CSS      

## Results

**The following changes have been made to accomodate the additional filters:**
    - The list element that creates the button is removed, and there are five list elements for filtering in the index.html file. (20 pt)
    - The event listener is modified to detect changes to each filter in the app.js file. (10 pt)
    - The updateFilters() function saves the element, value, and the id of the filter that was changed. (20 pt)
    - The filterTable() function loops through all of the filters and keeps any data that matches the filter values. (20 pt)
    - The webpage filters the table correctly based on user input. (20 pt)
    - Yeah.... that adds to 90, not 80.  smh

**MAKE IT LOOK LIKE THIS**

![sample](https://github.com/catsdata/UFOs/blob/main/static/images/challenge_example.png)


## Summary

In Summary, the table has been updated as requested to include filters for the city, state, country and shape of the anomalies.  

One major drawback to the current coding is data types in the filter selections and table date.  The text in the table is all lowercase.  If you do a search on the state of California as "CA" rather than the table format of "ca", you won't get the expected results.  The date field is also very specific on the string entry.  If you do a search as 01/06/2010 rather than 1/06/2010, you lack results.   The data types of the table detail and filters should match for reduced entry error and confusion.

Additional recommendations to make this filter table more user friendly:
- Make the content of the filters a drop down using content from the table to remove free form aspect of entry.
- Allow the filter boxes to float and follow the scroll of the table, so it moves with you as you scroll down.
- Freeze the table header; so as you scroll, you still know which columns are which.
- Add a "clear all filters" button for redoing a search.
- Provide more data!  Two weeks worth of data is not very informative.
