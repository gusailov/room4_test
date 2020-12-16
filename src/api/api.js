import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  params: {
    //  limit: "10",
    format: "json",
  },
  headers: {
    "x-rapidapi-key": "2d8bcfc378mshd0a8c0076754a4dp18578ajsnbf56719ff2ce",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
});
const str = "global hits 2020";
export const mainPageAPI = {
  gettoptracks(page) {
    return instance.get(`/search/playlist?index=0&limit=10&q=${str}`);
  },
};
export const artistPageAPI = {
  getartistinfo(artist_name) {
    return instance.get(`/artist/${artist_name}`);
  },
  getartisttop(artist_name) {
    return instance.get(`/chart/0/tracks?`);
  },
};
export const searchPageAPI = {
  searchtrack(track, page) {
    return instance.get(`/search?q=${track}&index=${page}`);
  },
};
