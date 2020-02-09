const COORDS = "coodrs";

function saveCoords() {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function geoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function paintGeoError() {
  console.log("Can't access your location");
}

function askForCoordes() {
  navigator.geolocation.getCurrentPosition(geoSucces, paintGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(CODERS);

  if (loadedCoords === null) {
    askForCoordes();
  } else {
  }
}

function init() {}
init();
