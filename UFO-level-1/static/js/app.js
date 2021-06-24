// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);
var tbody = d3.select("tbody");
console.log(data);

// Read table info
data.forEach(function(tableinfo){ console.log(tableinfo);  var row = tbody.append("tr");
    Object.entries(tableinfo).forEach(function([key,value]){
        console.log(key,value);var rowtableinfo = tbody.append("td");
        rowtableinfo.text(value);
    });
});

//Filter Search
var button = d3.select("#filter-btn");
button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

    //Filter click event
    var getdatetime = d3.select("#datetime").property("value"); 
    var clickfilter = tableData.filter(tableData => tableData.datetime === getdatetime);
    clickfilter.forEach(function(dateData){var row=tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){var rowtableinfo=tbody.append("td");
        rowtableinfo.text(value);
        });
    });
});