import Map from "./views/map.js";
import { fetchData } from "./model.js";

const init = function () {
  console.log("okay working!!");
  const map = new Map();
  map.loadmap();
  fetchData("27.56.246.3");
};

init();
