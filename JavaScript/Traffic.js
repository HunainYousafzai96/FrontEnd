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
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
  var data = google.visualization.arrayToDataTable([
    ["City", "2010 Tax", "2000 Tax"],
    ["Lahore", 8150500, 6008000],
    ["Islamabad", 3792000, 3694000],
    ["Rawalpind", 2695000, 2896000],
    ["Karach", 7099000, 3953000],
    ["Pishwar", 1526000, 1517000],
  ]);

  var options = {
    title: "Tax Report of Pakistan. Cities",
    chartArea: { width: "50%" },
    colors: ["#b0120a", "#ffab91"],
    hAxis: {
      title: "Tax Report",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
//
