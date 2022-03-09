// import the data from data.js
const tableData = data;
// Reference the HTML table using d3; declare tbody variable & d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// Module 11.5.1+
// Clear all data from current table to prevent reinserting data that already exists, thus creating duplicates
function buildTable(data) {
    tbody.html("");
      // Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
// create filter by date
  function handleClick() {
    // look for #datetime id in the HTML tags
    let date = d3.select("#datetime").property("value");
    // state filter the data from imported data.js file from above
    let filteredData = tableData;
    // if-statement; Check if date was entered and filter the data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

    // Rebuild the table using the filtered data; If no date entered, then original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);