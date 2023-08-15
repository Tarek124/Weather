const apiKey = '6fd3ce76aedb9ec7232f6603014c39d1',
    apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=',
    input = document.getElementById('input'),
    btn = document.getElementById('btn'),
    tem = document.getElementById('tem'),
    citynum = document.getElementById('cityName'),
    lead = document.getElementById("lead"),
    img = document.getElementById("img")


let citys = "feni";
btn.addEventListener('click', () => {
    citys = input.value
    checkWeather()
})
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btn.click()
    }
});
async function checkWeather() {
    const res = await fetch(apiUrl + citys + `&appid=${apiKey}`);
    let data = await res.json();
    e(data)
}


checkWeather()
function e(data) {
    let cityName = data.name;
    let tempera = data.main.temp
    let feels_like = data.main.feels_like
    let sky = data.weather[0].main;
    let icons = data.weather[0].icon
    citynum.innerText = cityName
    tem.innerText = Math.floor(tempera);
    lead.innerText = sky;
    img.src = `https://openweathermap.org/img/wn/${icons}@2x.png`

}




// Precipitation: 40%
// Humidity: 84%
// Wind: 11 km/h