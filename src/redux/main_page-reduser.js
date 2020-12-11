import { mainPageAPI } from "../api/api";

const SET_TRACKS = "SET_TRACKS";

const initialState = {
  tracks: [],
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return { ...state, tracks: action.tracks };

    default:
      return state;
  }
};
export const setTracks = (tracks) => ({ type: SET_TRACKS, tracks });

export const getTopTracks = () => {
  return (dispatch) => {
    mainPageAPI.gettoptracks().then((data) => {
      dispatch(setTracks(data.data.tracks.track));
    });
  };
};

export default mainPageReducer;
