//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API-key} 
var searchBtn = document.querySelector("#search-button");//$('#search-button');
var searchBar = document.querySelector("#search-bar");

var cityAndToday = document.querySelector("#city-and-today");//$('#city-and-today');
var todayTemp = document.querySelector("#today-temp");//$('#today-temp');
var todayWind = document.querySelector("#today-wind");//$('#today-wind');
var todayHumidity = document.querySelector("#today-humidity");//$('#today-Humidity')

var searchHistory = JSON.parse(localStorage.getItem("history")) || [];

function fetchAPIData(city){
    var apiKey ='appid=575a38952d6eade22750975bfb1c7f22';
    var lat = "lat=43.03&";
    var lon = "lon=-87.90&";
    var apiURl = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&"+apiKey;
    //"https://api.openweathermap.org/data/2.5/forecast?"+lat+lon+apiKey;

    fetch(apiURl).then(function (response) {
        
            return response.json();
        
    }).then(function (data){
        for(var i=0; i<40; i+=8){
            console.log(data.list[i])
            var weather;
            var weatherDoc = JSON.stringify(data.list[i].weather[0].main);
            console.log(weatherDoc)
            if(weatherDoc =='"Clear"'){
                    console.log('"Clear"');
                    weather = "☀️";
            }else if(weatherDoc == '"Clouds"'){
                    console.log("clouds");
                    weather = "☁️";
            }else if(weatherDoc == '"Rain"'){
                    console.log("rain");
                    weather = "🌧️";
            }

            var date= JSON.stringify(data.list[i].dt_txt);
            var temp = JSON.stringify(Math.floor(data.list[i].main.temp))+"° F";
            var wind  = JSON.stringify(data.list[i].wind.speed)+" MPH";
            var humidity  = JSON.stringify(data.list[i].main.humidity)+"%";
            date = date.substring(6,11)
            if(i<=0){
                cityAndToday.textContent=city.split(',')[0]+" "+date+weather;
                todayTemp.textContent= temp;
                todayWind.textContent= wind;
                todayHumidity.textContent= humidity;
            /*}else{
                var forecastDiv = document.createElement("div");*/

            }
            console.log(date)
            console.log(JSON.stringify(Math.floor(data.list[i].main.temp))+"° F");
        }
        //document.getElementById("current-temp").textContent= JSON.stringify(Math.floor(data.list[0].main.temp))+"° F";
    })
}
function clearFields(){
    console.log("reached 3");
    cityAndToday.value = "";
    todayTemp.value= "";
    todayWind.value= "";
    todayHumidity.value="";
    console.log("reached 4");
}

function handleSearch(){
    console.log("reached 1");
    if(searchBar.value){
        console.log("reached 2");
        clearFields();
        saveSearch(searchBar.value);
        fetchAPIData(searchBar.value+",us&");
        console.log("handleSearch complete");
    }
}
function saveSearch(value){
    searchHistory.push(value)
    localStorage.setItem("history", JSON.stringify(searchHistory));
    showHistory();
}
function showHistory(){
    for(var i=0;i<5;i++){
        var newSearch = document.createElement("li");
        var searchNode = docuemnt.createTextNode(searchHistory[i]);
        newSearch.appendChild(searchNode);
        document.querySelector("search-list").appendChild(newSearch);
    }
}
fetchAPIData("Milwaukee,us&");

//searchBtn.addEventListener("click", handleSearch());
searchBtn.addEventListener("click", function(){
    console.log("click!")
    handleSearch()});

docuemnt.querySelector("#search-list").children().addEventListener('click','child-selector', function(){
    console.log()
});