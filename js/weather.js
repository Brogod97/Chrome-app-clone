const API_KEY = "394ba2396aa89d14d5f810d0389ac50a";

function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("날씨 정보를 불러오는데 실패했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
