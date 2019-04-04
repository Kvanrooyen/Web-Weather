# Web Weather
A simple website that uses Javascript to fetch weather information from (https://openweathermap.org)[https://openweathermap.org] .

## Getting Started
You can clone the project by using the terminal or you can download it as a zip file straight from GitHub. To clone the project in your terminal type the following:
```
git clone https://github.com/Kvanrooyen/Web-Weather.git
```

This will download the entire project, to the directory you opend your terminal in. You can download the git bash terminal from (here)[https://git-scm.com/downloads].

Once you have the projecton your local machine, you will need to edit the javascript file. You will need an api key from (open weather map)[https://openweathermap.org], once you have this you will need to add it the following line of code.
```javascript
var key = 'Your API Key'
``` 
You will also need a ID for your city, a list of ID's can be found (here)[http://bulk.openweathermap.org/sample/]. Once you have your city ID, you will need to put that in the javascript file. The ID goes in the following line of code - remove the quotes from the parentheses
```javascript
window.onload = function() {
  weatherBalloon('City ID'); //City ID
}
```

## Testing Locally
In order to test the site locally, you will need to open it in the browser of your choice. You can do this by right clicking on the file and selecting open with - choose your browser.