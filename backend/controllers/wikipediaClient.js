const axios = require("axios");

async function fetchWikipediaInfo(landmarkName) {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        landmarkName
      )}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Wikipedia data:", error);
    throw new Error("Could not fetch data from Wikipedia.");
  }
}

module.exports = { fetchWikipediaInfo };
