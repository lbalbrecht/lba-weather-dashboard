var apiKey = '91d06b081975cb9e9ba419e831395fd0';


$(document).ready(function () {
    var searches = [];
    $('#search-btn').on('click', function (event) {
        event.preventDefault();
        var cityInput = $("#city-input").val();
        localStorage.setItem('searches', cityInput)
        clearPage();
        ajaxCall(cityInput);
    });
    
    function displaySearches() {
        console.log("Hello world!")
        var listEl = document.createElement('li');
        var retrievedSearches = localStorage.getItem('searches');
        console.log(retrievedSearches)
        
        for (i = 0; i < retrievedSearches.length; i++) {
            listEl.value = retrievedSearches[i]
            $('#city-list').append(listEl)
            listEl.style.margin = '15px';
        }
    };

    function ajaxCall(cityInput) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`,
            method: "GET",
        }).then(function (response) {
            var todayHeader = $('#name-date')
            todayHeader.append(cityInput + ' ' + (moment().format('l')));

            $("#temp").append("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
            $("#humid").append("Humidity: " + (response.main.humidity) + '%')
            $("#wind").append("Wind speed: " + (response.wind.speed) + 'mph')

            if (response.weather[0].main === "Rain") {
                $('#weather-icon').addClass('fas fa-cloud-rain')
            }
            if (response.weather[0].main === "Clouds") {
                $('#weather-icon').addClass('fas fa-cloud')
            }
            if (response.weather[0].main === "Clear") {
                $('#weather-icon').addClass('fas fa-sun')
            }
            if (response.weather[0].main === "Snow") {
                $('#weather-icon').addClass('fas fa-snowflake')
            }
        });

        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`,
            method: "GET"
        }).then(function (response) {
            searches.push(cityInput)
            console.log(searches)
            $("#date1").append((moment().add(1, 'days').format('l')));
            $("#temp1").append('Temperature: ' + (((response.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid1').append('Humidity: ' + ((response.list[0].main.humidity) + '%'));
            if (response.list[0].weather[0].main === "Rain") {
                $('#icon1').addClass('fas fa-cloud-rain')
            }
            if (response.list[0].weather[0].main === "Clouds") {
                $('#icon1').addClass('fas fa-cloud')
            }
            if (response.list[0].weather[0].main === "Clear") {
                $('#icon1').addClass('fas fa-sun')
            }
            if (response.list[0].weather[0].main === "Snow") {
                $('#icon1').addClass('fas fa-snowflake')
            }

            $("#date2").append((moment().add(2, 'days').format('l')));
            $("#temp2").append('Temperature: ' + (((response.list[8].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid2').append('Humidity: ' + ((response.list[8].main.humidity) + '%'));
            if (response.list[8].weather[0].main === "Rain") {
                $('#icon2').addClass('fas fa-cloud-rain')
            }
            if (response.list[8].weather[0].main === "Clouds") {
                $('#icon2').addClass('fas fa-cloud')
            }
            if (response.list[8].weather[0].main === "Clear") {
                $('#icon2').addClass('fas fa-sun')
            }
            if (response.list[8].weather[0].main === "Snow") {
                $('#icon2').addClass('fas fa-snowflake')
            }

            $("#date3").append((moment().add(3, 'days').format('l')));
            $("#temp3").append('Temperature: ' + (((response.list[16].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid3').append('Humidity: ' + ((response.list[16].main.humidity) + '%'));
            if (response.list[16].weather[0].main === "Rain") {
                $('#icon3').addClass('fas fa-cloud-rain')
            }
            if (response.list[16].weather[0].main === "Clouds") {
                $('#icon3').addClass('fas fa-cloud')
            }
            if (response.list[16].weather[0].main === "Clear") {
                $('#icon3').addClass('fas fa-sun')
            }
            if (response.list[16].weather[0].main === "Snow") {
                $('#icon3').addClass('fas fa-snowflake')
            }

            $("#date4").append((moment().add(4, 'days').format('l')));
            $("#temp4").append('Temperature: ' + (((response.list[24].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid4').append('Humidity: ' + ((response.list[24].main.humidity) + '%'));
            if (response.list[24].weather[0].main === "Rain") {
                $('#icon4').addClass('fas fa-cloud-rain')
            }
            if (response.list[24].weather[0].main === "Clouds") {
                $('#icon4').addClass('fas fa-cloud')
            }
            if (response.list[24].weather[0].main === "Clear") {
                $('#icon4').addClass('fas fa-sun')
            }
            if (response.list[24].weather[0].main === "Snow") {
                $('#icon4').addClass('fas fa-snowflake')
            }

            $("#date5").append((moment().add(5, 'days').format('l')));
            $("#temp5").append('Temperature: ' + (((response.list[32].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F'));
            $('#humid5').append('Humidity: ' + ((response.list[32].main.humidity) + '%'));
            if (response.list[32].weather[0].main === "Rain") {
                $('#icon5').addClass('fas fa-cloud-rain')
            }
            if (response.list[32].weather[0].main === "Clouds") {
                $('#icon5').addClass('fas fa-cloud')
            }
            if (response.list[32].weather[0].main === "Clear") {
                $('#icon5').addClass('fas fa-sun')
            }
            if (response.list[32].weather[0].main === "Snow") {
                $('#icon5').addClass('fas fa-snowflake')
            }
        })
        displaySearches();
        showForecast();
    };
});

function showForecast() {
    document.querySelector('#city-list').style.visibility = 'visible';
    document.querySelector('#today-forecast').style.visibility = 'visible';
    document.querySelector('#five-day-forecast').style.visibility = 'visible';
};


function clearPage() {
    $("#name-date").empty();
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
}