// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// function to append all data in table rows
function displayData(dataSet) {
    dataSet.forEach(dataObject => {
        var row =tbody.append("tr");
        columns.forEach(column => row.append("td").text(dataObject[column]));
    });
};

//Populate all data in table
displayData(data);

// Create event handlers
button.on("click", search)
// Filter by attribute
function search() {
	d3.event.preventDefault();
	var date = inputDate.property("value").trim();
	// Filter by field matching input value
	var filterData = data.filter(data => data.datetime === date);
	// clean the search results
    tbody.html("");
    // return search results
	displayData(filterData);
}