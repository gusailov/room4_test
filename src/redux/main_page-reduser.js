import { mainPageAPI } from "../api/api";

const SET_TRACKS = "SET_TRACKS";
const SET_PAGES = "SET_PAGES";

const initialState = {
  tracks: [],
  pages: 10,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return { ...state, tracks: action.tracks };
    case SET_PAGES:
      return { ...state, pages: action.pages };
    default:
      return state;
  }
};
export const setTracks = (tracks) => ({ type: SET_TRACKS, tracks });
export const setPages = (pages) => ({ type: SET_PAGES, pages });

export const getTopTracks = (page) => {
  return (dispatch) => {
    mainPageAPI.gettoptracks(page).then((data) => {
      dispatch(setTracks(data.data.tracks.track));
      dispatch(setPages(data.data.tracks["@attr"].totalPages));
    });
  };
};

export default mainPageReducer;
