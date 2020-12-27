import { mainPageAPI } from "../api/api";

const SET_TRACKS = "SET_TRACKS";
const SET_PAGES = "SET_PAGES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  tracks: [],
  pages: 10,
  isFetching: true,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return { ...state, tracks: action.tracks };
    case SET_PAGES:
      return { ...state, pages: action.pages };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setTracks = (tracks) => ({ type: SET_TRACKS, tracks });
export const setPages = (pages) => ({ type: SET_PAGES, pages });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getTopTracks = (querry, page) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const limit = 10;
    let index = 0;
    const data = await mainPageAPI.gettoptracks(
      querry,
      page > 1 ? (index = (page - 1) * limit) : index,
      limit
    );

    dispatch(toggleIsFetching(false));
    dispatch(setTracks(data.data));
    dispatch(setPages(20));
  };
};

export default mainPageReducer;
