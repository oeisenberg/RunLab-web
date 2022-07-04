// var rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';
// var xField = 'Date';
// var yField = 'Mean_TemperatureC';

// var config = {responsive: true, showSendToCloud: false}

// var selectorOptions = {
//     buttons: [{
//         step: 'month',
//         stepmode: 'backward',
//         count: 1,
//         label: '1m'
//     }, {
//         step: 'month',
//         stepmode: 'backward',
//         count: 6,
//         label: '6m'
//     }, {
//         step: 'year',
//         stepmode: 'todate',
//         count: 1,
//         label: 'YTD'
//     }, {
//         step: 'year',
//         stepmode: 'backward',
//         count: 1,
//         label: '1y'
//     }, {
//         step: 'all',
//     }],
// };

// Plotly.d3.csv(rawDataURL, function(err, rawData) {
//     if(err) throw err;

//     var data = prepData(rawData);
//     var layout = {
//         title: 'Time series with range slider and selectors',
//         xaxis: {
//             rangeselector: selectorOptions,
//             rangeslider: {}
//         },
//         yaxis: {
//             fixedrange: true
//         }
//     };

//     Plotly.plot('frequency', data, layout, config);
// });

// function prepData(rawData) {
//     var x = [];
//     var y = [];

//     console.log(rawData.length)

//     rawData.forEach(function(datum, i) {
//         if(i % 100) return;

//         x.push(new Date(datum[xField]));
//         y.push(datum[yField]);
//     });

//     return [{
//         mode: 'lines',
//         x: x,
//         y: y
//     }];
// }

// var data = [
//     {
//       z: [[1, null, 30, 10], [20, 1, 60, 20], [80, 30, 20, 30], [30, 60, 1, 5], [-10, 20, 20, 5], [30, 60, 1, 7], [-10, 20, 20, 10]],
//       y: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//       x: ['1', '2', '3', '4', '5'],
//       showscale: false,
//       type: 'heatmap',
//       hoverongaps: false
//     }
//   ];
  
// Plotly.newPlot('heatmap', data);

var polyline = '{ueyHrat@Ec@G?CIAkBG{@i@eCCCUKY?YE_@@ICM@o@POXKtAMNUDe@r@u@|A{A|D_AvAuAjCc@j@g@|@SRg@jAc@~@y@jBKj@GpAJLl@Tb@TTTRV@F@JI\\@Bp@VDABCp@_Bn@}@\\gARMCQHc@To@Pu@R_@h@U|@W~As@p@]r@g@d@W^Ir@[`@MVWr@k@TYpA_A^U~AaBpAaAl@y@POp@iAZ]L[F]FQRU@QEU{@eCmAkEa@y@m@}@W_AQa@_@e@[o@MOK?EBq@|A]\\e@n@YVQTKTUx@_@n@a@h@y@p@yAx@c@XIL@FBBZLPPNJF@f@?NBD?'
points = decode(polyline)

// process points with mapbox/walking nav service, to perform Map Matching.


var data = [{
    type: 'scattermapbox', // poss to change to density map box for heat maps (with z coord)
    mode: 'lines',
    lat: points[0],
    lon: points[1],
    line:{
        width: 2,
        color: 'orange'
    }
  }];

var layout = {
    dragmode: 'zoom',
    mapbox: {
      center: {
        lat: 51.48,
        lon: -0.27
      },
      domain: {
        x: [0, 1],
        y: [0, 1]
      },
      style: 'mapbox://styles/oeisenberg/ckai611bv0m6j1itfg5gboxd3',
      zoom: 14
    },
    margin: {
      r: 0,
      t: 0,
      b: 0,
      l: 0,
      pad: 0
    },
    paper_bgcolor: '#191A1A',
    plot_bgcolor: '#191A1A',
    showlegend: false
 };

Plotly.newPlot('map', data, layout, {mapboxAccessToken: 'pk.eyJ1Ijoib2Vpc2VuYmVyZyIsImEiOiJja2FpNXdsOWIwZjJ3Mnl0aXdkOW02YmI1In0.sFJ73eVSAeGgu22t4EabPg'});

function decode(encoded){

    // array that holds the points

    var latitude=[ ]
    var longitude=[ ]
    var index = 0, len = encoded.length;
    var lat = 0, lng = 0;
    while (index < len) {
        var b, shift = 0, result = 0;
        do {

    b = encoded.charAt(index++).charCodeAt(0) - 63;//finds ascii                                                                                    //and substract it by 63
              result |= (b & 0x1f) << shift;
              shift += 5;
             } while (b >= 0x20);


       var dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
       lat += dlat;
      shift = 0;
      result = 0;
     do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
       shift += 5;
         } while (b >= 0x20);
     var dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
     lng += dlng;
 
//    points.push({latitude:( lat / 1E5),longitude:( lng / 1E5)})  
    latitude.push(lat/1E5);
    longitude.push(lng/1E5);
  }
  return [latitude, longitude]
}


// https://plotly.com/javascript/mapbox-layers/