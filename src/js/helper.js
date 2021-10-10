import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! timeout after ${s} seconds`));
    }, s * 1000);
  });
};
export const getJson = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
