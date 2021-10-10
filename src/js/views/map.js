export default class Map {
  loadmap() {
    // console.log("loading map......");
    var map = L.map("map", {
      zoomControl: false,
    }).setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    let myIcon = L.icon({
      iconUrl: "/src/images/icon-location.svg",
      iconSize: [46, 56],
      iconAnchor: [22, 94],
      popupAnchor: [1, -90],
    });
  }
}
