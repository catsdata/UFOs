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

Dana’s, a data journalist and UFO enthusiast, created a webpage and dynamic table to share UFO sighting information with others.  But she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time rather than just the date of the sighting. In addition to the date, she would like to add table filters for the city, state, country, and shape of the anomalies.  

The original table only has a filter based on date, using a button for entry:

![current](https://github.com/catsdata/UFOs/blob/main/static/images/original.PNG)

The additional filters should look like the following upon completion:

![current](https://github.com/catsdata/UFOs/blob/main/static/images/challenge_example.png)


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
- The list element that creates the button was removed.
- Five list elements for filtering were updated in the index.html file.
- An event listener was modified to detect changes to each filter in the app.js file.
- The updateFilters() function saved the element, value, and the id of the filter that was changed.
- The filterTable() function looped through all of the filters to keep any data that matches the filter values. 

**The table filters now look like this:**

![completed](https://github.com/catsdata/UFOs/blob/main/static/images/completed_challenge.PNG)

Filters update the table as they are entered/removed.

In this case, we first filtered by 1/1/2010 by typing in the date only and hitting enter.

![completed](https://github.com/catsdata/UFOs/blob/main/static/images/single.PNG)

We then filtered down to only California sightings by typing in "ca" in the state field and hitting enter.

![completed](https://github.com/catsdata/UFOs/blob/main/static/images/double.PNG)

Lastly we filtered down to the city by entering "el cajon" in the city field and hitting enter.

![completed](https://github.com/catsdata/UFOs/blob/main/static/images/triple.PNG)

The table will again update as you delete your entries.


## Summary

In Summary, the table has been updated as requested to include filters for the city, state, country and shape of the anomalies.  

One major drawback to the current coding is data types in the filter selections and table date.  The text in the table is all lowercase.  If you do a search on the state of California as "CA" rather than the table format of "ca", you won't get the expected results.  The date field is also very specific on the string entry.  If you do a search as the standard date format of 01/06/2010 rather than 1/6/2010, you lack results.   The data types of the table detail and filters should match for reduced entry error and confusion.

Additional recommendations to make this filter table more user friendly:
- Make the content of the filters a drop down using content from the table to remove free form aspect of entry.
- Allow the filter boxes to float and follow the scroll of the table, so it moves with you as you scroll down.
- Freeze the table header; so as you scroll, you still know which columns are which.
- Add a "clear all filters" button for redoing a search.
- Provide more data!  Two weeks worth of data is not very informative.
