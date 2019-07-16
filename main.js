var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wS = document.querySelector('.wS');
var description = document.querySelector('.description');
var container2 = document.querySelector('.container2');
var button = document.querySelector('.btn');

  // Sanitize and encode all HTML in from a 3rd party
  var sanitizeHTML = function(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };






  // make JS watch for button click

button.addEventListener('click' || 'keyup', function(event){
  if(event.keyCode === 13)
  event.preventDefault();
    // grab the userinput for city
  var userInput = document.querySelector(".userInput").value;




  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);

        var descrip = data.weather[0].description;
        description.innerHTML = descrip;
        var wtemp = data.main.temp;
        temp.innerHTML = wtemp;
        var windSpeed = data.wind.speed;
        wS.innerHTML = windSpeed;
        var wHumidity = data.main.humidity;
        humidity.innerHtml = wHumidity;
        console.log(xhr);
      } else {
        // This will run when it's not
        container2.textContent = 'Error retrieving weather data, please try again later';
        console.log(xhr);
      }
};

// added + userInput + variable to the middle of api url
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial&appid=b54143e0f03ddd73038c29263a7266bd');
xhr.send();

}, false);
