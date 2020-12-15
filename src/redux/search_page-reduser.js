import { searchPageAPI } from "../api/api";

const SEARCH_TRACKS = "SEARCH_TRACKS";
const SET_PAGES = "SET_PAGES";

const initialState = {
  result: [],
  pages: 10,
};

const searchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TRACKS:
      return { ...state, result: action.result };
    case SET_PAGES:
      return { ...state, pages: action.pages };
    default:
      return state;
  }
};
export const setResult = (result) => ({ type: SEARCH_TRACKS, result });
export const setPages = (pages) => ({ type: SET_PAGES, pages });

export const getSearchResult = (track, page) => {
  return (dispatch) => {
    searchPageAPI.searchtrack(track, page).then((data) => {
      console.log("searchPageAPI", data);

      dispatch(setResult(data.data));
      dispatch(setPages(10));
    });
  };
};

export default searchPageReducer;
