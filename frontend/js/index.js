var gauges = [];
var memberGauges = [];   
var config1 = liquidFillGaugeDefaultSettings();  
for (var i = 1; i <= 4; i++) {
    memberGauges[i-1] = loadLiquidFillGauge("membergauge" + i, 0, config1);
} 
for (var i = 1; i <= 8; i++) {
    gauges[i-1] = loadLiquidFillGauge("fillgauge" + i, 69, config1);
}
console.log(gauges);
function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}


var data = [NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue()];



function getData(test) {
    updateCircles(test.id);
    updateChart(test.id);

}

function updateCircles(id) {
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
        config1.circleColor = "#5bc0de";
        config1.textColor = "#2698BA";
        config1.waveTextColor = "#5bc0de";
        config1.waveColor = "#99D7EA";
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
    for (var i = 1; i <= 8; i++) {
        data = [NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue(),NewValue()];
        changeColor('fillgauge' + i);
        gauges[i-1].update(data[i-1]);
    }


}

function changeColor(elementId) {
  var gauge = d3.select("#" + elementId);
  gauge.selectAll('path').style('fill', config1.circleColor);
  gauge.selectAll('text').style("fill", config1.textColor)
  gauge.selectAll('circle').style("fill", config1.waveColor);

}

