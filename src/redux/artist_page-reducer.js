import { artistPageAPI } from "../api/api";

const SET_ARTIST = "SET_ARTIST";
const SET_TRACKLIST = "SET_TRACKLIST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  artist: {},
  tracklist: [],
  isFetching: true,
};

const artistPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return { ...state, artist: action.artist };
    case SET_TRACKLIST:
      return { ...state, tracklist: action.tracklist };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setArtistInfo = (artist) => ({ type: SET_ARTIST, artist });
export const setArtistTrackList = (tracklist) => ({
  type: SET_TRACKLIST,
  tracklist,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getArtistInfo = (artist_name) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await artistPageAPI.getartistinfo(artist_name);
    console.log(" artistPageAPI", data);
    dispatch(setArtistInfo(data));
    const tracklist = await artistPageAPI.getArtistTrackList(artist_name);
    console.log("getArtistTrackList API", tracklist.data);
    dispatch(setArtistTrackList(tracklist.data));
    dispatch(toggleIsFetching(false));
  };
};

export default artistPageReducer;
