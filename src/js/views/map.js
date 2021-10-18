import View from "./view.js";

class Map extends View {
  _map;
  _myIconUrl = "/src/images/icon-location.svg";

  loadmap() {
    // console.log("loading map......");
    this._map = L.map("map", {
      zoomControl: false,
    }).setView([28, 77.1], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);
  }

  addMarker(latlng) {
    const myMarker = L.marker(latlng, {
      icon: this._getIcon(),
    });

    myMarker.addTo(this._map);
    this._map.panTo(latlng, { animate: true, duration: 1 });
    L.circle(latlng, { radius: 30000 }).addTo(this._map);
  }

  _getIcon() {
    const icon_size = L.point(10, 12); //for dynamic icon size,
    const image_url = this._myIconUrl; //for dynamic images

    return L.icon({
      iconUrl: image_url,

      iconSize: icon_size.multiplyBy(3), // size of the icon
      iconAnchor: [16, 50], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
  }
}

export default new Map();
