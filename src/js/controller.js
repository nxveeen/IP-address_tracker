import * as model from "./model.js";
import map from "./views/map.js";
import searchView from "./views/searchView.js";
import { fetchData } from "./model.js";
import resultView from "./views/resultView.js";

const controlSearch = async function () {
  let query = searchView.getquery();
  // console.log(query);

  model.state.ipAddress = query;
  // console.log(model.state.ipAddress);
  await fetchData(query);
  // console.log(model.state.res);
  _controlShowResult();
  controlMapEvents();
};

const _controlShowResult = function () {
  resultView.render(model.state.res);
};

const controlMapEvents = function () {
  let lat = model.state.res.location.latitude;
  let lng = model.state.res.location.longitude;
  const coords = [lat, lng];
  map.addMarker(coords);
};

const init = function () {
  console.log("okay working!!");
  map.loadmap();
  searchView.addHandlerSearch(controlSearch);
};

init();
