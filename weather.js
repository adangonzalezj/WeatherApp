"using strict"
//window.alert("conected");
//add click handler for button
document.getElementById("forecast").addEventListener("click", getData);

function getData(){
    console.log("clicked");
     //get zipcode
     var zipcode = 
     document.getElementById("zipcode").value;
     console.log(zipcode);
     //getWeather("zipcode")
}

//getWeather(90210);

function getWeather(zip){
    var endpoint =
    "https://api.openweathermap.org/data/2.5/weather";
    var apiKey = "1307007a7da1aeb5b59930a312a42cd3";
    
    var queryString = "zip=" + zip +
    "&units=imperial&appid=" + apiKey;
    var url = endpoint + "?" + queryString;
    //create object
    var xhr = new XMLHttpRequest();
    //set up action response
    xhr.addEventListener("load", responseReceivedHandler);
    //REQUIRED for JSON
    xhr.responseType = "json"; 
    //open the connection
    xhr.open("GET", url);
    //send the data
    xhr.send();

}

function responseReceivedHandler() {
    var weatherInfo = 
    document.getElementById("weatherInfo");
    if (this.status === 200){
        //console.log(this.response);
        //console.log("city is " + this.response.name);
        //console.log("temp is: "+ this.response.main.temp);
        //console.log("description is " + this.response.weather[0].description);
        //console.log("temp is: " + this.response.main.temp);
        var data = this.response;

        weatherInfo.innerHTML =
        "<p>City: " + data.name + "</p>" +
        "<p>Current Temp: " + data.main.temp + "deg;F</p>" +
        "<p>Desc: " + data.weather[0].description
        + "</p>" +
        "<p>Humidity: " + data.main.humidity + "%</p>";

    }

    else {
        weatherInfo.innerHTML = "wether data unavailable.";

    }
}