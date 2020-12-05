const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'a9126b7b0582baa918da27d1e74dd4ac';
let city = argv.c || 'tokyo'; //Want to resolve issue with multiple word city entry error, e.g., San Francisco
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      let weather = JSON.parse(body)
      let message = `It is ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});