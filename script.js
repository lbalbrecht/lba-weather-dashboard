var apiKey = '91d06b081975cb9e9ba419e831395fd0';

$(document).ready(function () {
    $('#search-btn').on('click', function (event) {
        event.preventDefault();
        var cityInput = $("#city-input").val();
        var searches = [];
        searches.push(cityInput)
        localStorage.setItem('searches', searches)
        ajaxCall(cityInput);
        console.log(cityInput);
    });
    function ajaxCall(cityInput) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var todayHeader = $('#name-date')
            todayHeader.append(cityInput + ' ' + (moment().format('l')));

            $("#temp").append("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
            $("#humid").append("Humidity: " + (response.main.humidity) + '%')
            $("#wind").append("Wind speed: " + (response.wind.speed) + 'mph')

            if (response.weather[0].main === "Rain") {
                $('#weather-icon').addClass('fas fa-cloud-rain')
            }
            if (response.weather[0].main === "Clouds") {
                $('#weather-icon').addClass('fas fa-clouds')
            }
            if (response.weather[0].main === "Clear") {
                $('#weather-icon').addClass('fas fa-sun')
            }
            if (response.weather[0].main === "Snow") {
                $('#weather-icon').addClass('fas fa-snowflakes')
            }

        });
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#date1").append((moment().add(1, 'days').format('l')));
            $("#temp1").append('Temperature: ' + (((response.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid1').append('Humidity: ' + ((response.list[0].main.humidity) + '%'));
            $('#wind1').append('Wind speed: ' + ((response.list[0].wind.speed) + 'mph'));

            $("#date2").append((moment().add(2, 'days').format('l')));
            $("#temp2").append('Temperature: ' + (((response.list[8].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid2').append('Humidity: ' + ((response.list[8].main.humidity) + '%'));
            $('#wind2').append('Wind speed: ' + ((response.list[8].wind.speed) + 'mph'));

            $("#date3").append((moment().add(3, 'days').format('l')));
            $("#temp3").append('Temperature: ' + (((response.list[16].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid3').append('Humidity: ' + ((response.list[16].main.humidity) + '%'));
            $('#wind3').append('Wind speed: ' + ((response.list[16].wind.speed) + 'mph'));

            $("#date4").append((moment().add(4, 'days').format('l')));
            $("#temp4").append('Temperature: ' + (((response.list[24].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid4').append('Humidity: ' + ((response.list[24].main.humidity) + '%'));
            $('#wind4').append('Wind speed: ' + ((response.list[24].wind.speed) + 'mph'));

            $("#date5").append((moment().add(5, 'days').format('l')));
            $("#temp5").append('Temperature: ' + (((response.list[32].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid5').append('Humidity: ' + ((response.list[32].main.humidity) + '%'));
            $('#wind5').append('Wind speed: ' + ((response.list[32].wind.speed) + 'mph'));

        })
        showForecast();
    }
});

function showForecast() {
    document.querySelector('#today-forecast').style.visibility = 'visible';
    document.querySelector('#five-day-forecast').style.visibility = 'visible';
};


var listEl = document.createElement('li');
var retrievedSearches = localStorage.getItem('searches');

for (i = 0; i < retrievedSearches.length; i++) {
    listEl.append(retrievedSearches[i])
}
$('#city-list').append(listEl)
listEl.style.margin = '15px';

$('body').bind('beforeunload', function () {
    $("#temp").empty();
    $("#humid").empty();
    $("#wind").empty();

    $("#date1").empty();
    $("#temp1").empty();
    $('#humid1').empty();
    $('#wind1').empty();

    $("#date2").empty();
    $("#temp2").empty();
    $('#humid2').empty();
    $('#wind2').empty();

    $("#date3").empty();
    $("#temp3").empty();
    $('#humid3').empty();
    $('#wind3').empty();

    $("#date4").empty();
    $("#temp4").empty();
    $('#humid4').empty();
    $('#wind4').empty();

    $("#date5").empty();
    $("#temp5").empty();
    $('#humid5').empty();
    $('#wind5').empty();

})