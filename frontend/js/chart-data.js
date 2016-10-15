var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
	
	var focusData = [35, 45, 61, 70, 39, 45, 53, 42, 33];
	var interestData  = [40, 23, 31, 50, 51, 60, 49, 40];
	var stressData = [17, 29, 38, 24, 36, 48, 64, 50, 42];
	var engagemenetData = [16, 80, 75, 70, 36, 50, 75, 62];
	var relaxationData = [70, 47, 34, 31, 63, 39, 23, 90];

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
					data : focusData
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
			for (i = 0; i < 8; i++) { 
				window.myLine.datasets[0].points[i].value = focusData[i];
			}
		}
		else if (id=="interest"){
			window.myLine.datasets[0].strokeColor = "#8ad919";
			window.myLine.datasets[0].pointHighlightStroke = "#8ad919";
			console.log(window.myLine.datasets[0]);
			window.myLine.datasets[0].points.fillColor = "#8ad919";
			console.log(window.myLine.datasets[0]);
			window.myLine.datasets[0].fillColor = "rgba(138, 217, 25, 0.2)";
			for (i = 0; i < 8; i++) { 
				window.myLine.datasets[0].points[i].value = interestData[i];
			}
		}
		else if (id==="stress"){
			window.myLine.datasets[0].strokeColor = "#f9243f";
			window.myLine.datasets[0].pointHighlightStroke = "#f9243f";
			window.myLine.datasets[0].pointColor = "#f9243f";
			window.myLine.datasets[0].fillColor = "rgba(249, 36, 63, 0.2)";
			for (i = 0; i < 8; i++) { 
				window.myLine.datasets[0].points[i].value = stressData[i];
			}
		}
		else if (id==="engagement"){
			window.myLine.datasets[0].strokeColor = "#ffb53e";
			window.myLine.datasets[0].pointHighlightStroke = "#ffb53e";
			window.myLine.datasets[0].pointColor = "#ffb53e";
			window.myLine.datasets[0].fillColor = "rgba(255, 181, 62, 0.2)";
			for (i = 0; i < 8; i++) { 
				window.myLine.datasets[0].points[i].value = engagemenetData[i];
			}
		}
		else if (id==="relaxation"){
			window.myLine.datasets[0].strokeColor = "#b728db";
			window.myLine.datasets[0].pointHighlightStroke = "#b728db";
			window.myLine.datasets[0].pointColor = "#b728db";
			window.myLine.datasets[0].fillColor = "rgba(183, 40, 219, 0.2)";
			for (i = 0; i < 8; i++) { 
				window.myLine.datasets[0].points[i].value = relaxationData[i];
			}
		}
		else {
			console.log("cyka blyat");
		}
		window.myLine.update();
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