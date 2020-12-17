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
    return instance
      .get(`/search/playlist?index=0&limit=10&q=${str}`)
      .then((response) => {
        return response.data;
      });
  },
};
export const artistPageAPI = {
  getartistinfo(artist_name) {
    return instance.get(`/artist/${artist_name}`).then((response) => {
      return response.data;
    });
  },
  getartisttop(artist_name) {
    return instance.get(`/chart/0/tracks?`);
  },
  getArtistTrackList(artist_id) {
    return instance.get(`artist/${artist_id}/top?limit=50`).then((response) => {
      return response.data;
    });
  },
};
export const searchPageAPI = {
  searchtrack(track, page) {
    return instance.get(`/search?q=${track}&index=${page}`).then((response) => {
      return response.data;
    });
  },
};
