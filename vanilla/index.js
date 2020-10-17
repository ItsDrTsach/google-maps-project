// Functions
let map; // initial the map at global scope

function initMap() {
  //Map options
  let location = { lat: 34.22, lng: 32.5 };
  const options = {
    zoom: 7,
    center: location,
  };
  map = new google.maps.Map(document.getElementById("map"), options);
}

// Add marker function
function addMarker(map, location, info) {
  let marker = new google.maps.Marker({
    map: map,
    position: location,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "<h1>" + info + "</h1>",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

// fetch the dataBase

fetch("http://localhost:4000/api/v1/city")
  .then((res) => res.json())
  .then((allCities) => {
    console.log(allCities);
    allCities.forEach((city) => {
      console.log(city);
      const { lat, long: lng, name, fullDescription } = city;
      addMarker(map, { lat, lng }, fullDescription);
    });
  });
