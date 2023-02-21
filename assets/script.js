var searchBtn = document.getElementById("btnSearch")
var APIKey = "ebff7363aed85398609f98e3f11393a5"

var weatherEl = document.getElementById("weather")
var tempEl = document.getElementById("temp")
var humidityEl = document.getElementById("humidity")
var windEl = document.getElementById("wind")

var day1Temp = document.getElementById("day1-temp")
var day2Temp = document.getElementById("day2-temp")
var day3Temp = document.getElementById("day3-temp")
var day4Temp = document.getElementById("day4-temp")
var day5Temp = document.getElementById("day5-temp")

var day1Wind = document.getElementById("day1-wind")
var day2Wind = document.getElementById("day2-wind")
var day3Wind = document.getElementById("day3-wind")
var day4Wind = document.getElementById("day4-wind")
var day5Wind = document.getElementById("day5-wind")

var day1Humidity = document.getElementById("day1-humidity")
var day2Humidity = document.getElementById("day2-humidity")
var day3Humidity = document.getElementById("day3-humidity")
var day4Humidity = document.getElementById("day4-humidity")
var day5Humidity = document.getElementById("day5-humidity")


function performSearch(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var newImg = document.createElement('img');
          
        weatherEl.innerHTML = data.name + moment (data.dt, "X").format(" MM/DD/YYYY") + `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        tempEl.innerHTML = "temp: " + data.main.temp  
        humidityEl.innerHTML = "humidity:" + data.main.humidity 
        windEl.innerHTML = "wind:" + data.wind.speed
        
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKey}&units=imperial`)
        .then(response =>response.json())
        .then(onecalldata => {
            console.log(onecalldata)

            day1Temp.innerHTML = "temp: " + onecalldata.list[4].main.temp
            day2Temp.innerHTML = "temp: " + onecalldata.list[12].main.temp
            day3Temp.innerHTML = "temp: " + onecalldata.list[20].main.temp
            day4Temp.innerHTML = "temp: " + onecalldata.list[28].main.temp
            day5Temp.innerHTML = "temp: " + onecalldata.list[36].main.temp


             day1Wind.innerHTML = "wind: " + onecalldata.list[4].wind.speed
            day2Wind.innerHTML = "wind: " + onecalldata.list[12].wind.speed
            day3Wind.innerHTML = "wind: " + onecalldata.list[20].wind.speed
            day4Wind.innerHTML = "wind: " + onecalldata.list[28].wind.speed
            day5Wind.innerHTML = "wind: " + onecalldata.list[36].wind.speed


             day1Humidity.innerHTML = "humidity: " + onecalldata.list[4].main.humidity
            day2Humidity.innerHTML = "humidity: " + onecalldata.list[12].main.humidity
            day3Humidity.innerHTML = "humidity: " + onecalldata.list[20].main.humidity
            day4Humidity.innerHTML = "humidity: " + onecalldata.list[28].main.humidity
            day5Humidity.innerHTML = "humidity: " + onecalldata.list[36].main.humidity
        })
        })
}

function lookUp (event) {
    event.preventDefault ()
var cityNameEl = document.getElementById ("search-box")
performSearch (cityNameEl.value)
}


//WHEN I click on a city in the search history,THEN I am again presented with current and future conditions for that city
searchBtn.addEventListener("click", lookUp)










// API for 5 day forecast


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}