import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  params: {
    limit: "10",

    format: "json",
  },
  headers: {
    "x-rapidapi-key": "2d8bcfc378mshd0a8c0076754a4dp18578ajsnbf56719ff2ce",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export const mainPageAPI = {
  gettoptracks(page) {
    return axios.get(`https://api.deezer.com/chart/0/tracks?index=30&limit=10`);
  },
};
export const artistPageAPI = {
  getartistinfo(artist_name) {
    return instance.get(`/artist/${artist_name}`);
  },
  getartisttop(artist_name) {
    return instance.get(`/artist/${artist_name}/top?limit=10`);
  },
};
export const searchPageAPI = {
  searchtrack(track, page) {
    return instance.get(`/search?q=${track}&index=${page}`);
  },
};
