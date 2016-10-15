    var gauge1 = loadLiquidFillGauge("fillgauge1", 26, config1);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF0000";
    config1.textColor = "#FF0000";
    config1.waveTextColor = "#FF0000";
    config1.waveColor = "#FF0000";
    var gauge2 = loadLiquidFillGauge("fillgauge2", 12, config1);
    var gauge3 = loadLiquidFillGauge("fillgauge3", 0);
    var gauge4 = loadLiquidFillGauge("fillgauge4", 0);
    var gauge5 = loadLiquidFillGauge("fillgauge5", 0);
    var gauge6 = loadLiquidFillGauge("fillgauge6", 0);
    var gauge7 = loadLiquidFillGauge("fillgauge7", 0);
    var gauge8 = loadLiquidFillGauge("fillgauge8", 0);
    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }


    var data = [{"id":3,"teamid":1,"interest":12,"engagement":55,"stress":20,"relaxation":54,"focus":23},{"id":2,"teamid":1,"interest":33,"engagement":12,"stress":88,"relaxation":3,"focus":23}]


    function neshtosi(test) {
        updateCircles(test.id);
        updateChart(test.id);

    }

    function updateCircles(id) {
        if (test.id === 'focus') {
            for (var i = 1; i <= 8; i++) {


            }
        }
        console.log(test);
        console.log(test.id);
    }

