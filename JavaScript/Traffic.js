google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Checking", "Vehical per Day"],
    ["Truck", 11],
    ["HI S", 2],
    ["Cars", 21],
    ["Construction vehical", 2],
    ["Buses", 17],
  ]);

  var options = {
    title: "Daily Statistics",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

//Multiple Line Chart

//Responsive Chart
