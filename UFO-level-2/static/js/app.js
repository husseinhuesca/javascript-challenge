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
    var getdatetime = d3.select("#datetime").property("value"); 
    var getcity=d3.select("#city").property("value");
    var getstate=d3.select("#state").property("value");
    var getcountry=d3.select("#country").property("value");
    var getshape=d3.select("#shape").property("value");

    //Filter click event
    var clickfilter=tableData;
    if (getdatetime){clickfilter = clickfilter.filter(row => row.datetime === getdatetime);}
    if (getcity){clickfilter = clickfilter.filter(row => row.city === getcity);}
    if (getstate){clickfilter = clickfilter.filter(row => row.state === getstate);}
    if (getcountry){clickfilter = clickfilter.filter(row => row.country === getcountry);}
    if (getshape){clickfilter = clickfilter.filter(row => row.shape === getshape);}
    
    clickfilter.forEach(function(dateData){
        var row=tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){ var rowtableinfo=tbody.append("td");
        rowtableinfo.text(value);
        });
    });
});