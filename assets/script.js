//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 
function fetchAPIData(){
    var apiKey ='575a38952d6eade22750975bfb1c7f22';
    var lat = 43.038902;
    var lon = -87.906471;
    var apiURl ="https://api.openweathermap.org/data/2.5/forecast?q=";

    fetch(apiURl).then(function (response) {
        if(response.ok){
            console.log(response.json())
            return response.json();
        }
    })
}
fetchAPIData();


var searchParams =  document.location.search.split('&');

console.log(searchParams);