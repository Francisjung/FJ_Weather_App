//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API-key} 
var tempP = document.getElementById("current-temp");

function fetchAPIData(city){
    var apiKey ='appid=575a38952d6eade22750975bfb1c7f22';
    var lat = "lat=43.03&";
    var lon = "lon=-87.90&";
    var apiURl = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&"+apiKey;
    //"https://api.openweathermap.org/data/2.5/forecast?"+lat+lon+apiKey;

    fetch(apiURl).then(function (response) {
        
            return response.json();
        
    }).then(function (data){
        console.log(data.list)
        document.getElementById("current-temp").textContent= JSON.stringify(Math.floor(data.list[0].main.temp))+"° F";
    })
}
fetchAPIData("Milwaukee,us&");