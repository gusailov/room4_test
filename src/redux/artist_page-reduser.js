import { artistPageAPI } from "../api/api";

const SET_ARTIST = "SET_ARTIST";

const initialState = {
  artist: [],
};

const artistPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return { ...state, artist: action.artist };

    default:
      return state;
  }
};
export const setArtistInfo = (artist) => ({ type: SET_ARTIST, artist });

export const getArtistInfo = (artist_name) => {
  return (dispatch) => {
    artistPageAPI.getartistinfo(artist_name).then((data) => {
      console.log(" artistPageAPI", data);
      dispatch(setArtistInfo(data.data));
    });
    artistPageAPI.getartisttop(artist_name).then((data) => {
      console.log(" getartisttop API", data);
      dispatch(setArtistInfo(data.data));
    });
  };
};

export default artistPageReducer;
