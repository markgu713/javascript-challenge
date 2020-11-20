// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// function to append all data in table rows
function displayAllData(dataSet) {
    dataSet.forEach(dataObject => {
        var row =tbody.append("tr");
        columns.forEach(column => row.append("td").text(dataObject[column]));
    });
};

//Populate data in table
displayAllData(data);



//var inputCity= d3.select("#city");
//var resetbtn = d3.select("#reset-btn");