import { searchPageAPI } from "../api/api";

const SEARCH_TRACKS = "SEARCH_TRACKS";

const initialState = {
  result: [],
};

const searchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TRACKS:
      return { ...state, result: action.result };

    default:
      return state;
  }
};
export const setResult = (result) => ({ type: SEARCH_TRACKS, result });

export const getSearchResult = (track) => {
  return (dispatch) => {
    searchPageAPI.searchtrack(track).then((data) => {
      console.log("searchPageAPI", data.data.results.trackmatches.track);
      dispatch(setResult(data.data.results.trackmatches.track));
    });
  };
};

export default searchPageReducer;
