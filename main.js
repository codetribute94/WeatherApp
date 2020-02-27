city = document.querySelector('.location p');
humElement = document.querySelector('.humidity p');
temElement = document.querySelector('.temperature p');
desElemet = document.querySelector('.description p');
presElement = document.querySelector('.pressure p');
inputElement = document.querySelector('.weather-input');
addbtn = document.querySelector('.btn');

//Update Weather
addbtn.addEventListener('click', (e) => {
    e.preventDefault();

    let inputVal = inputElement.value;
    inputElement.value = '';

    getWeather(inputVal);


});


//App data
const weather = {};

weather.temperature = {
    unit: "celsius"
};

//App const and var
const KELVIN = 273;
//Api Key
const key = '1c9f362ec953672faaf7265710afb13a';

//Get Api from provider.
function getWeather(inputVal) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=${key}`;
    console.log(api);
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.humidity = data.main.humidity;
            weather.pressure = data.main.pressure;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            displayWeather();
        });
}
//Display Weather UI
function  displayWeather() {
    temElement.innerHTML = `${weather.temperature.value}˚<span>C</span>`;
    desElemet.innerHTML = weather.description;
    humElement.innerHTML = weather.humidity;
    presElement.innerHTML = weather.pressure;
    city.innerHTML = `${weather.city},${weather.country}`;
}







//
// function getWeather(inputVal) {
//     const KELVIN = 273;
//     const apiKey = '1c9f362ec953672faaf7265710afb13a';
//     ;
//     fetch(api)
//         .then(function (response) {
//             console.log(response);
//             let data = response.json();
//             return data;
//         })
//         .then(function (data) {
//             weather.temperature.value = Math.floor(data.main.temp - KELVIN);
//             weather.description.value = data.weather[0].description;
//             weather.city = data.name;
//         })
//         .then(function(){
//             displayWeather();
//         })
//
// }
//
//
// function celsiusToFahrenheit(temperature) {
//     return (temperature * 9/5) + 32;
// }
//
// temElement.addEventListener('click', function () {
//     if(weather.temperature.unit === 'celsius'){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
//         temElement.innerHTML = `${fahrenheit}˚<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }
//     else {
//         temElement.innerHTML = `${weather.temperature.value}˚ <span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
//
// });
//







