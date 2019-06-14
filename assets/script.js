document.querySelector('#checkWeatherBtn').addEventListener('click', function(){

    let location = document.querySelector('#cityInput').value.trim();
    if(location === ""){
        alert("please enter a location"); //check id the user dosent type in the text area

    }
    let queryString = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=451f87687e789832132654c235693894&units=metric`;
    fetch(queryString).then(response=>response.json()).then(function drawWeather(d) {
        var celcius = Math.round(d.main.temp);
        document.getElementById('description').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = celcius + ' &#8451;';
        document.getElementById('location').innerHTML = "your location is" + " " + d.name;
   
       
    }).catch(function(err){
        console.log("error"); // catch server errors
        
    })
   
     

});



   