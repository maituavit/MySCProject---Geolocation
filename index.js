function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `The current temperature is ${temperature}oC in ${response.data.name}`;
  }
  function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "57dbe59227301a8dcb57abc123010b46";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }
  navigator.geolocation.getCurrentPosition(handlePosition);
  