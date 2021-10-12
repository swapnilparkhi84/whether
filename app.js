var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


const KELVIN = 273.15;


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')

    .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            temp.innerHTML = "Temperature - " + (tempValue - KELVIN);
            input.value = "";

            main.innerHTML = nameValue;
            desc.innerHTML = "Description - " + descValue;

        })

    .catch(err => alert("Wrong city name!"));
})