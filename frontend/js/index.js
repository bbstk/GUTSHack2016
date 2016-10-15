    var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
        var gauge2 = loadLiquidFillGauge("fillgauge2", 55);
    var config2 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
        var gauge3 = loadLiquidFillGauge("fillgauge3", 55);
    var config3 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
        var gauge4 = loadLiquidFillGauge("fillgauge4", 55);
    var config4 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    //     var gauge5 = loadLiquidFillGauge("fillgauge5", 55);
    // var config5 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;
    //     var gauge6 = loadLiquidFillGauge("fillgauge6", 55);
    // var config6 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;
    //     var gauge7 = loadLiquidFillGauge("fillgauge7", 55);
    // var config7 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;
    //     var gauge8 = loadLiquidFillGauge("fillgauge8", 55);
    // var config8 = liquidFillGaugeDefaultSettings();
    // config1.circleColor = "#FF7777";
    // config1.textColor = "#FF4444";
    // config1.waveTextColor = "#FFAAAA";
    // config1.waveColor = "#FFDDDD";
    // config1.circleThickness = 0.2;
    // config1.textVertPosition = 0.2;
    // config1.waveAnimateTime = 1000;
    function NewValue(){
        if(Math.random() > .5){
            return Math.round(Math.random()*100);
        } else {
            return (Math.random()*100).toFixed(1);
        }
    }


    var data = [{"id":3,"teamid":1,"interest":12,"engagement":55,"stress":20,"relaxation":54,"focus":23},{"id":2,"teamid":1,"interest":33,"engagement":12,"stress":88,"relaxation":3,"focus":23}]
    console.log(d3.select('#rowContainer').select('#row1').selectAll('svg').data(data).enter().append('p').text('hello'));