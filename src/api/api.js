import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0/",
  params: {
    api_key: process.env.REACT_APP_LAST_FM_API_KEY,
    format: "json",
  },
});

export const mainPageAPI = {
  gettoptracks() {
    return instance.get(`?method=chart.gettoptracks&page=1`);
  },
};
export const artistPageAPI = {
  getartistinfo(artist_name) {
    return instance.get(`?method=artist.getinfo&artist=${artist_name}`);
  },
};
export const searchPageAPI = {
  searchtrack(track) {
    return instance.get(`?method=track.search&track=${track}`);
  },
};
