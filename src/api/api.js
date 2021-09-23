import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.deezer.com",
  params: {
    format: "json",
    access_token: process.env.DEEZER_API_TOKEN,
  },
});

export const mainPageAPI = {
  gettoptracks(querry, limit) {
    return instance
      .get(`/search/playlist?index=0&limit=${limit}&q=${querry}`)
      .then((response) => {
        return response.data;
      });
  },
};
export const playlistPageAPI = {
  getPlaylist(playlist_id) {
    return instance.get(`/playlist/${playlist_id}`).then((response) => {
      return response.data;
    });
  },
};

export const artistPageAPI = {
  getartistinfo(artist_id) {
    return instance.get(`/artist/${artist_id}`).then((response) => {
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
  searchTrack(querry, limit) {
    return instance
      .get(`/search/track?index=0&limit=${limit}&q=${querry}`)
      .then((response) => {
        return response.data;
      });
  },
  searchAlbum(querry, limit) {
    return instance
      .get(`/search/album?index=0&limit=${limit}&q=${querry}`)
      .then((response) => {
        return response.data;
      });
  },
  searchPlaylist(querry, limit) {
    return instance
      .get(`/search/playlist?index=0&limit=${limit}&q=${querry}`)
      .then((response) => {
        return response.data;
      });
  },
  searchArtist(querry, limit) {
    return instance
      .get(`/search/artist?index=0&limit=${limit}&q=${querry}`)
      .then((response) => {
        return response.data;
      });
  },
};
