var todayWeather = $('#today-forecast')
var cityInput = $("#city-input").val();

var apiKey = '91d06b081975cb9e9ba419e831395fd0';
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
// var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`

$(document).ready(function () {
    $('#search-btn').on('click', function (event) {
        event.preventDefault();
        ajaxCall(cityInput);
        console.log(cityInput);
    });
    function ajaxCall(cityInput) {
        $.ajax({
            url: queryURL,
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

            $("#temp").append(((response.main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
            $("#humid").append((response.main.humidity) + '%')
            $("#wind").append((response.wind.speed) + 'mph')
        })
        // $.ajax({
        //     url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response)
        //     $("#day-1").append(((response.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
        //     $("#day-1").append((response.list[0].main.humidity) + '%')
        
        //     $("#day-2").append(
        //         (((response.list[8].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
        //         ((response.list[8].main.humidity) + '%')
        //     )
        //     $("#day-3").append(
        //         (((response.list[16].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
        //         ((response.list[16].main.humidity) + '%')
        //     )
        //     $("#day-4").append(
        //         (((response.list[24].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
        //         ((response.list[24].main.humidity) + '%')
        //     )
        //     $("#day-5").append(
        //         (((response.list[32].main.temp - 273.15) * 1.8 + 32).toFixed(1) + `\xB0` + 'F')
        //         ((response.list[32].main.humidity) + '%')
        //     )
        // })
    }
});
