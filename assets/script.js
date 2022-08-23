var searchBtn = document.getElementById("btnSearch")
var APIKey = "ebff7363aed85398609f98e3f11393a5"





//search for a city,current and future conditions for that city and that city is added to the search history


//view current weather conditions for that city, presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, the wind speed, and the UV index


//view the UV index, presented with a color that indicates whether the conditions are favorable, moderate, or severe


//view future weather conditions for that city,THEN I am presented with a 5-day forecast that displays the date, an icon representation of 
//weather conditions, the temperature, the wind speed, and the humidity




function performSearch(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&callback=test&appid=${APIKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newImg = document.createElement('img');
           // newImg.setAttribute("src", data.)

           // document.getElementById("weatherMain").append(newImg)
        })
}
function lookUp (event) {
    event.preventDefault ()
var cityNameEl = document.getElementById ("search-box")
performSearch (cityNameEl.value)
}
//WHEN I click on a city in the search history,THEN I am again presented with current and future conditions for that city
searchBtn.addEventListener("click", lookUp)