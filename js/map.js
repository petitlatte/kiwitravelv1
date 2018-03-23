mapboxgl.accessToken = 'pk.eyJ1IjoicGV0aXRsYXR0ZSIsImEiOiJjamFuN2hnMjczYTJ2Mndyem5kMHJiZzhlIn0.89uD039oo97AAr6-2oxaNQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [170.036940, -41.131399],
  zoom: 4.75,
});

var directions = new MapboxDirections({
      accessToken: (mapboxgl.accessToken),
      unit: 'metric'
    });


//CUSTOM 

var travelDistance = 0;
var travelDays= 0;

    map.addControl(directions, 'top-right');
    // console.log(directions);
    

        // console.log(directions);
        // console.log(directions.route["0"].distance);
        // console.log(directions.route["0"].duration);

      directions.on('route', function(directions){

        travelDistance =directions.route['0'].distance / 1000;
        // alert((Math.floor(travelDistance)));
        //var
        travelDays = directions.route["0"].duration / 86400;
        // alert((Math.floor(travelDays))+1);

        $(".h2_result_distance").text((Math.floor(travelDistance))+ " km");

        if(directions.route["0"].distance > 0){
          
        $(".ctn_slide_content").slick('slickNext');

          }

    });  




