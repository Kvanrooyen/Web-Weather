function weatherBalloon(cityID) {
  var key = 'Your appID';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
    .then(function(resp) {
      return resp.json()
    }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
}

window.onload = function() {
  weatherBalloon('City ID'); //City ID
}

function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15); //Convert from kelvin to celcius
  
  document.getElementById( 'description' ).innerHTML = d.weather[0].description;
  document.getElementById( 'temp' ).innerHTML = celcius + '&deg'; //Add the degrees symbol next to the temperature
  document.getElementById( 'location' ).innerHTML = d.name; //Get the name of the location

  //Used in the css file, to change the background colour depending on weather condition
  if( description.indexOf('rain') > 0 ) {
    document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
    document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
    document.body.className = 'sunny';
  }
}