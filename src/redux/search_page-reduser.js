import { searchPageAPI } from "../api/api";

const SEARCH_TRACKS = "SEARCH_TRACKS";
const SET_PAGES = "SET_PAGES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  result: [],
  pages: 10,
  isFetching: true,
};

const searchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TRACKS:
      return { ...state, result: action.result };
    case SET_PAGES:
      return { ...state, pages: action.pages };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setResult = (result) => ({ type: SEARCH_TRACKS, result });
export const setPages = (pages) => ({ type: SET_PAGES, pages });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getSearchResult = (track, page) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await searchPageAPI.searchtrack(track, page);
    dispatch(toggleIsFetching(false));
    console.log("searchPageAPI", data.data);
    dispatch(setResult(data.data));
    dispatch(setPages(10));
  };
};

export default searchPageReducer;
