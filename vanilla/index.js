let map; // initial the map at global scope

function initMap() {
  //Map options
  let location = { lat: 34.22, lng: 32.5 };
  const options = {
    zoom: 7,
    center: location,
  };
  map = new google.maps.Map(document.getElementById("map"), options);
  addMarker(map, location, "third");
  addMarker(map, { lat: 34.3, lng: 32.2 }, "second");
  addMarker(map, { lat: 35, lng: 31 }, "fourth");
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
