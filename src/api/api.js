import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0/",
  params: {
    api_key: process.env.REACT_APP_LAST_FM_API_KEY,
  },
});

export const mainPageAPI = {
  gettoptracks() {
    return instance.get(`?method=chart.gettoptracks&format=json&page=1`);
  },
};
export const artistPageAPI = {
  getartistinfo(artist_name) {
    return instance.get(
      `?method=artist.getinfo&artist=${artist_name}&format=json`
    );
  },
};
