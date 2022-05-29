const API_KEY = "60c6d8337a1d543609d14da1d5697140"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        
        weather.innerText = `현재위치 : ${data.weather[0].main} / 현재온도 : ${data.main.temp}도`
        city.innerText = data.name
    })    
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)