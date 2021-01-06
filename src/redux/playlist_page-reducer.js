import { playlistPageAPI } from "../api/api";

const SET_PLAYLIST = "SET_PLAYLIST";
const SET_TRACKS = "SET_TRACKS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  playlist: {},
  tracks: [],
  isFetching: true,
};

const playlistPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return { ...state, playlist: action.playlist };
    case SET_TRACKS:
      return { ...state, tracks: action.tracks };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setPlaylist = (playlist) => ({ type: SET_PLAYLIST, playlist });
export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getPlaylistInfo = (playlist_id) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await playlistPageAPI.getPlaylist(playlist_id);
    console.log("playlistPageAPI", data);
    dispatch(setPlaylist(data));
    dispatch(setTracks(data.tracks.data));
    dispatch(toggleIsFetching(false));
  };
};

export default playlistPageReducer;
