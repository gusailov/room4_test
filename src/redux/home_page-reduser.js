import { mainPageAPI } from "../api/api";

const SET_TRACKS = "SET_TRACKS";
const SET_ID = "SET_ID";
const SET_PAGES = "SET_PAGES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  tracks: [
    {
      id: "",
      value: "",
      list: [],
    },
  ],
  pages: 10,
  isFetching: true,
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        tracks: [
          ...state.tracks,
          { id: action.id, value: action.query, list: action.tracks },
        ],
      };
    case SET_ID:
      return { ...state, tracks: action.tracks.list };
    case SET_PAGES:
      return { ...state, pages: action.pages };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setTracks = (id, query, tracks) => ({
  type: SET_TRACKS,
  id,
  query,
  tracks,
});
export const setId = (id) => ({ type: SET_ID, id });
export const setPages = (pages) => ({ type: SET_PAGES, pages });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getTopTracks = (query, id) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const limit = 5;
    const data = await mainPageAPI.gettoptracks(query, limit);
    dispatch(setTracks(id, query, data.data));
    dispatch(setPages(data.total / limit));
    dispatch(toggleIsFetching(false));
  };
};

export default mainPageReducer;
