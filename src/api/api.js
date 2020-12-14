import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0/",
  params: {
    api_key: "26d44d949aef2ed24c76ad6056fa10d7",
    format: "json",
  },
});

export const mainPageAPI = {
  gettoptracks(page) {
    return instance.get(`?method=chart.gettoptracks&page=${page}`);
  },
};
export const artistPageAPI = {
  getartistinfo(artist_name) {
    return instance.get(`?method=artist.getinfo&artist=${artist_name}`);
  },
};
export const searchPageAPI = {
  searchtrack(track, page) {
    return instance.get(`?method=track.search&track=${track}&page=${page}`);
  },
};
