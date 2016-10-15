var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var lineChartData = {
			labels : ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "#30a5ff",
					pointColor : "#000",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "#30a5ff",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

	function updateChart(id){
		var colorManagement = window.myLine.datasets;
		if (id=="focus"){
			window.myLine.datasets[0].strokeColor = "#30a5ff";
			window.myLine.datasets[0].pointHighlightStroke = "#30a5ff";
			window.myLine.datasets[0].pointColor = "#30a5ff";
			window.myLine.datasets[0].fillColor = "rgba(48, 165, 255, 0.2)";
		}
		else if (id=="interest"){
			window.myLine.datasets[0].strokeColor = "#8ad919";
			window.myLine.datasets[0].pointHighlightStroke = "#8ad919";
			console.log(window.myLine.datasets[0]);
			window.myLine.datasets[0].points.fillColor = "#8ad919";
			console.log(window.myLine.datasets[0]);
			window.myLine.datasets[0].fillColor = "rgba(138, 217, 25, 0.2)";
			window.myLine.datasets[0].points[0].value = 100;
		}
		else if (id==="stress"){
			window.myLine.datasets[0].strokeColor = "#f9243f";
			window.myLine.datasets[0].pointHighlightStroke = "#f9243f";
			window.myLine.datasets[0].pointColor = "#f9243f";
			window.myLine.datasets[0].fillColor = "rgba(249, 36, 63, 0.2)";
		}
		else if (id==="engagement"){
			window.myLine.datasets[0].strokeColor = "#ffb53e";
			window.myLine.datasets[0].pointHighlightStroke = "#ffb53e";
			window.myLine.datasets[0].pointColor = "#ffb53e";
			window.myLine.datasets[0].fillColor = "rgba(255, 181, 62, 0.2)";
		}
		else if (id==="relaxation"){
			window.myLine.datasets[0].strokeColor = "#5bc0de";
			window.myLine.datasets[0].pointHighlightStroke = "#5bc0de";
			window.myLine.datasets[0].pointColor = "#5bc0de";
			window.myLine.datasets[0].fillColor = "rgba(91, 192, 222, 0.2)";
		}
		else {
			console.log("cyka blyat");
		}
		// console.log(colorManagement);
		// console.log(window.myLine);
		// console.log(id);
		// window.myLine.datasets[0].fillColor = "#FF0000";
		window.myLine.update();
		// var chart1 = document.getElementById("line-chart").getContext("2d");
		// lineChartData.datasets.data = [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()];
		// window.myLine = new Chart(chart1).Line(lineChartData, {
		// 	responsive: true,
		// 	scaleOverride : true,
  //       	scaleSteps : 10,
  //       	scaleStepWidth : 10,
  //       	scaleStartValue : 0 
		// });
	}


	
		
	var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Orange"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Teal"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Red"
				}

			];
			
	var doughnutData = [
					{
						value: 300,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Blue"
					},
					{
						value: 50,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},
					{
						value: 100,
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "Teal"
					},
					{
						value: 120,
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Red"
					}
	
				];

window.onload = function(){
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true,
		scaleOverride : true,
        scaleSteps : 10,
        scaleStepWidth : 10,
        scaleStartValue : 0 
	});
	console.log(window.myLine);
};