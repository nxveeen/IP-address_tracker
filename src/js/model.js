import { API_KEY, API_URL } from "./config.js";
import { getJson } from "./helper.js";

export const state = {
  ipAddress: "",
  res: {},
  markers: [],
};

export const fetchData = async function (ipAddress = " ") {
  try {
    const result = await getJson(`${API_URL}${ipAddress}`);
    console.log(result);

    if (!result.success) throw new Error(`😂😂 ERRRRR!!!!!`);

    state.res = {
      ip: result.ip,
      continent: result.continent,
      country: result.country,
      country_code: result.country_code,
      state: result.region,
      city: result.city,
      isp: result.isp,
      timezone: result.timezone_gmt,
      location: {
        latitude: result.latitude,
        longitude: result.longitude,
      },
      type: result.type,
    };

    state.markers.push(result.ip);
    console.log(state.markers);
  } catch (err) {
    console.log(`${err}😂😂😂`);
  }
};
