var apiKey = '91d06b081975cb9e9ba419e831395fd0';

$(document).ready(function () {
    $('#search-btn').on('click', function (event) {
        event.preventDefault();
        var cityInput = $("#city-input").val();
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
            var today = new Date()
            var dd = today.getDate();
            var mm = today.getMonth();
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            };
            if (mm < 10) {
                mm = '0' + mm;
            };
            today = '(' + mm + '/' + dd + '/' + yyyy + ')'
            todayHeader.append(cityInput + ' ' + today)

            $("#temp").append("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
            $("#humid").append("Humidity: " + (response.main.humidity) + '%')
            $("#wind").append("Wind speed: " + (response.wind.speed) + 'mph')
        });
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#temp1").append('Temperature: ' + (((response.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid1').append('Humidity: ' + ((response.list[0].main.humidity) + '%'));
            $('#wind1').append('Wind speed: ' + ((response.list[0].wind.speed) + 'mph'));

            $("#temp2").append('Temperature: ' + (((response.list[8].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid2').append('Humidity: ' + ((response.list[8].main.humidity) + '%'));
            $('#wind2').append('Wind speed: ' + ((response.list[8].wind.speed) + 'mph'));

            $("#temp3").append('Temperature: ' + (((response.list[16].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid3').append('Humidity: ' + ((response.list[16].main.humidity) + '%'));
            $('#wind3').append('Wind speed: ' + ((response.list[16].wind.speed) + 'mph'));

            $("#temp4").append('Temperature: ' + (((response.list[24].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid4').append('Humidity: ' + ((response.list[24].main.humidity) + '%'));
            $('#wind4').append('Wind speed: ' + ((response.list[24].wind.speed) + 'mph'));

            $("#temp5").append('Temperature: ' + (((response.list[32].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid5').append('Humidity: ' + ((response.list[32].main.humidity) + '%'));
            $('#wind5').append('Wind speed: ' + ((response.list[32].wind.speed) + 'mph'));

            showForecast();
        })
    }
});

function showForecast() {
document.querySelector('#five-day-forecast').style.visibility = 'visible';
}