// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// function to append all data in table rows
function displayData(dataSet) {
    dataSet.forEach(dataObject => {
        var row =tbody.append("tr");
        columns.forEach(column => row.append("td").text(dataObject[column]));
    });
};

// populate options under select
function addDropdownOption(field) {
    var selectTag = document.getElementById(field);
    var optionArray = [];
    tableData.forEach(dataObject => {
        if (optionArray.indexOf(dataObject[field])> -1) {
            // do nothing
        } else {
            optionArray.push(dataObject[field]);
            let optEle = document.createElement("option");
            optEle.text = dataObject[field];
            optEle.value = dataObject[field];
            selectTag.add(optEle);
        };
    });
};

//Populate all data in table
displayData(data);

// Create event handlers
button.on("click", search)
// Filter by attribute
function search() {
	d3.event.preventDefault();
    var date = inputDate.property("value");
    var city = inputCity.property("value");
    var state = inputState.property("value");
    var country = inputCountry.property("value");
    var shape = inputShape.property("value");
	// Filter by field matching input value
    var filterData = tableData.filter(data => data.datetime === date && data.city === city && data.state === state && data.country === country && data.shape === shape);
	// clean the search results
    tbody.html("");
    // return search results
	displayData(filterData);
}