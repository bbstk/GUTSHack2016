
 var live;
$(function() {
    live = $("[name='my-checkbox']");
    live.bootstrapSwitch();


});
var gauges = [];
var memberGauges = [];   
var globalID = 'focus';
var config1 = liquidFillGaugeDefaultSettings();  
config1.circleColor = "#30a5ff";
config1.textColor = "#007FE0";
config1.waveTextColor = "#30a5ff";
config1.waveColor = "#85CAFF";
config1.waveCount = 2;
config1.waveAnimateTime = 2000;

for (var i = 1; i <= 8; i++) {
    memberGauges[i-1] = loadLiquidFillGauge("membergauge" + i, 50, config1);
} 
for (var i = 1; i <= 8; i++) {
    gauges[i-1] = loadLiquidFillGauge("fillgauge" + i, 50, config1);
}

$.get(
    "http://localhost:12345/teams/focus",
    {},
    function(data) {
        data = JSON.parse(data);
           for (var i = 1; i <= 8; i++) {
                changeColor('fillgauge' + i);
                gauges[i-1].update(data[i-1]);
            }
    }
);
function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}


var data = [NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue()];


var refreshIntervalId;
var refreshIntervalTeamId;

function getMemberData(element) {
    console.log(element.id);
	if(refreshIntervalId !== "undefined"){
		clearInterval(refreshIntervalId);	
	}
	
    $.get(
        "http://localhost:12345/teams/" + element.id + "/" + globalID,
        {},
        function(data) {
            data = JSON.parse(data);
               for (var i = 1; i <= 4; i++) {
				   console.log(element.id*4 - i + 1);
                    changeColor('membergauge' + (element.id*4 - i + 1));
                    memberGauges[element.id*4 - i].update(data[i-1]);
                }
        }
    );
	
	refreshIntervalId = setInterval(function()
	{ 
			
		$.get(
       "http://localhost:12345/teams/" + element.id + "/" + globalID,
        {},
        function(data) {
            data = JSON.parse(data);
               for (var i = 1; i <= 4; i++) {
                    changeColor('membergauge' + (element.id*4 - i + 1));
                    memberGauges[element.id*4 - i].update(data[i-1]);
                }
        }
    );
	}, 3000);
}



function getData(element) {
    updateCircles(element.id);
    updateChart(element.id);

}

var hardCodedValuesBefore12 = [18, 61, 33, 24, 55, 30, 25, 17, 47];
var hardCodedValuesAfter12 = [42, 94, 66, 48, 75, 65, 33, 54, 36];
var hardCodedTeamMembersBefore12 = [15, 21, 17, 19];
var hardCodedTeamMembersAfter12 = [24, 55, 30, 43];

$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
	
	if (state){
		refreshIntervalTeamId = setInterval(function()
		{ 
				$.get(
				"http://localhost:12345/teams/"+globalID,
				{},
				function(data) {
					data = JSON.parse(data);
					   for (var i = 1; i <= 8; i++) {

							gauges[i-1].update(data[i-1]);
						}
				}
			);
		}, 3000);
		
		
		refreshIntervalId = setInterval(function()
		{ 
			$.get(
		   "http://localhost:12345/teams/" + 1 + "/" + globalID,
			{},
			function(data) {
				data = JSON.parse(data);
				   for (var i = 1; i <= 4; i++) {
						changeColor('membergauge' + (4 - i + 1));
						memberGauges[4 - i].update(data[i-1]);
					}
			}
		    );
		}, 3000);
		
		refreshIntervalId = setInterval(function()
		{ 
			$.get(
		   "http://localhost:12345/teams/" + 2 + "/" + globalID,
			{},
			function(data) {
				data = JSON.parse(data);
				   for (var i = 1; i <= 4; i++) {
						changeColor('membergauge' + (8 - i + 1));
						memberGauges[8 - i].update(data[i-1]);
					}
			}
		    );
		}, 3000);
	}
});


function timelineChange(time)
{
	document.getElementById("range").innerHTML=time;
	
	live.bootstrapSwitch('state', false, false);
	
	if(globalID === "stress"){
		if(time < 12){
			for (var i = 1; i <= 8; i++) {
					gauges[i-1].update(hardCodedValuesBefore12[i-1]);
				}
			for (var i = 1; i <= 4; i++) {
                    memberGauges[i-1].update(hardCodedTeamMembersBefore12[i-1]);
                }
		}else{
			for (var i = 1; i <= 8; i++) {
					gauges[i-1].update(hardCodedValuesAfter12[i-1]);
				}
			for (var i = 1; i <= 4; i++) {
                    memberGauges[i-1].update(hardCodedTeamMembersAfter12[i-1]);
                }
		}
		
		if(refreshIntervalId !== "undefined"){
			clearInterval(refreshIntervalId);	
		}
		
		if(refreshIntervalTeamId !== "undefined"){
			clearInterval(refreshIntervalTeamId);	
		}
	}
}


function updateCircles(id) {
	globalID = id;
    if (id === 'interest') {
        config1.circleColor = "#8ad919";
        config1.textColor = "#5C9211";
        config1.waveTextColor = "#8ad919";
        config1.waveColor = "#AFEC5B";
    }
    else if (id === 'focus') {
        config1.circleColor = "#30a5ff";
        config1.textColor = "#007FE0";
        config1.waveTextColor = "#30a5ff";
        config1.waveColor = "#85CAFF";
    }
    else if (id === 'relaxation') {
        config1.circleColor = "#b728db";
        config1.textColor = "#831B9D";
        config1.waveTextColor = "#b728db";
        config1.waveColor = "#D073E7";
    }
    else if (id === 'stress') {
        config1.circleColor = "#f9243f";
        config1.textColor = "#F9102F";
        config1.waveTextColor = "#f9243f";
        config1.waveColor = "#FB6075";
    }
    else if (id === 'engagement') {
       config1.circleColor = "#ffb53e";
        config1.textColor = "#F59700";
        config1.waveTextColor = "#FFD899";
        config1.waveColor = "#ffb53e";
    }
    else {

    }
	
	
	$.get(
		"http://localhost:12345/teams/"+id,
		{},
		function(data) {
			data = JSON.parse(data);
		       for (var i = 1; i <= 8; i++) {
					changeColor('fillgauge' + i);
					gauges[i-1].update(data[i-1]);
				}
		}
	);
	



}

function changeColor(elementId) {
  var gauge = d3.select("#" + elementId);
  console.log(gauge);
  console.log(elementId);
  gauge.selectAll('path').style('fill', config1.circleColor);
  gauge.selectAll('text').style("fill", config1.textColor)
  gauge.selectAll('circle').style("fill", config1.waveColor);

}

refreshIntervalTeamId = setInterval(function()
{ 
		
	$.get(
		"http://localhost:12345/teams/"+globalID,
		{},
		function(data) {
			data = JSON.parse(data);
		       for (var i = 1; i <= 8; i++) {

					gauges[i-1].update(data[i-1]);
				}
		}
	);
}, 3000);


setInterval(function()
{ 	
	$.get(
		"http://localhost:12345/stress",
		{},
		function(data) {
		    if(+data !== 0){
				 bootstrap_alert.warning(data);
			}
		}
	);
}, 10000);

bootstrap_alert = function() {}
	bootstrap_alert.warning = function(message) {
            $('#danimani').html('			<div class="alert alert-warning alert-dismissible" role="alert">\
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
				<strong>Warning!</strong> High levels of stress experienced by team '+ message + '!\
			</div>')
        }
    

	