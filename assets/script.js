var apiKey ='575a38952d6eade22750975bfb1c7f22';
function fetchAPIData(city){
    var apiURl ="api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;

    fetch(apiURl).then(function (response) {
        if(response.ok){
            
        }
    })
}