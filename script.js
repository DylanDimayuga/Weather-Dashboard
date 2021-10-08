var cityInput = document.querySelector(".cityinput");
var searchBtn = document.querySelector(".searchbtn");
var container = document.querySelector(".container");

function saveCity() {
    var storedCity = cityInput.value.trim();
    localStorage.setItem("cityInput", storedCity);
    if (storedCity) {
        cityInput.value = "";

        listCity();
    } else {
        alert("Please enter a City");
    }
};

function getCityRepos() {
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=a03b138e43edcdb411e3301ae7f6bfe2"

// need to make 2 api calls. one to the one call and one to the current weather data for that city. Use the lat and lon from the current weather data to input into the one call so it can pull all the other information.
    listCity()
}

function listCity() {
    var cityValue = localStorage.getItem("cityInput")
    var newListItem = document.createElement("a");
    newListItem.textContent = (cityValue);
    newListItem.href = "#"
    newListItem.className = ("cityName");
    container.append(newListItem);
}

searchBtn.addEventListener("click", saveCity);