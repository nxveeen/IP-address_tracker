import { API_KEY, API_URL } from "./config.js";
import { getJson } from "./helper.js";

export const state = {
  ipAddress: "",
  res: {},
};

export const fetchData = async function (ipAddress) {
  try {
    const result = await getJson(
      `${API_URL}?&ip=${ipAddress}&apiKey=${API_KEY}`
    );
    console.log(result);
  } catch (err) {
    console.log(`${err}😂😂😂`);
  }
};
