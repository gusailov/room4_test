import { artistPageAPI } from "../api/api";

const SET_ARTIST = "SET_ARTIST";

const initialState = {
  artist: [],
  location: "",
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

export const getArtistInfo = (artist_name = "abba") => {
  return (dispatch) => {
    artistPageAPI.getartistinfo(artist_name).then((data) => {
      console.log("setArtistInfo(data)", data.data.artist);
      dispatch(setArtistInfo(data.data.artist));
    });
  };
};

export default artistPageReducer;
