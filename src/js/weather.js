function success(pos) {

    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}}&units=imperial`;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            document.getElementById("city").textContent = data.name;
            document.getElementById("temp").textContent = data.main.temp + "°F";
            document.getElementById("main").textContent = data.weather[0].main;
            document.getElementById("desc").textContent = data.weather[0].description;
            document.getElementById("weather").classList.remove("hidden");
            console.log("Data: ", data);
        })
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

window.onload = function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }    
}
